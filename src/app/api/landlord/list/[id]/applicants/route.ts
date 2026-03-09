import { NextRequest, NextResponse } from 'next/server';

// utils
import { omit } from '@/utils/object';
// data
import {
  applicationList,
  landlordDetails,
  landlordUsers,
  studentDetails,
  studentUsers,
} from '@/data';
// types
import { IUserItem } from '@/types/user';
import { IResponse } from '@/types/response';
import { ILandlordDetail, IStudentDetail } from '@/types/detail';
import { HousingApplicantResponse, IApplicationItem } from '@/types/housing';

// ----------------------------------------------------------------------

interface ResponseProps extends IResponse {
  data: HousingApplicantResponse[];
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const { searchParams } = request.nextUrl;

  const pageParam = searchParams.get('page');

  const limitParam = searchParams.get('limit');

  if (limitParam && !pageParam) {
    return NextResponse.json(
      { message: 'Page parameter is required when limit is provided.' },
      { status: 400 }
    );
  }

  const userById = landlordUsers.find((user) => user.id === id);

  if (!userById) {
    return NextResponse.json({ message: 'User not found.' }, { status: 404 });
  }

  //#region Fetching data
  const detail =
    landlordDetails.find((detail) => detail.userId === userById.id) ||
    ({} as ILandlordDetail);

  const applications = applicationList.filter(
    (appl: IApplicationItem) => appl.housingId === detail.id
  );

  const result: HousingApplicantResponse[] = applications.map((appl) => {
    const studentById =
      studentUsers.find((user) => user.id === appl.createdBy) ||
      ({} as IUserItem);

    const detailById =
      studentDetails.find((detail) => detail.userId === studentById.id) ||
      ({} as IStudentDetail);

    return {
      ...appl,
      studentDetails: {
        ...omit(studentById, ['password']),
        details: omit(detailById, ['userId']),
      },
    };
  });
  //#endregion

  //#region Paginating data
  let paginated: HousingApplicantResponse[] = result;

  const page = pageParam ? parseInt(pageParam, 10) : 1;

  if (isNaN(page) || page < 1) {
    return NextResponse.json(
      { message: 'Invalid page parameter.' },
      { status: 400 }
    );
  }

  const limit = limitParam ? parseInt(limitParam, 10) : result.length;

  if (isNaN(limit) || limit < 1) {
    return NextResponse.json(
      { message: 'Invalid limit parameter.' },
      { status: 400 }
    );
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  paginated = result.slice(startIndex, endIndex);
  //#endregion

  if (!paginated.length) {
    return NextResponse.json({ message: 'No results found.' }, { status: 404 });
  }

  const response: ResponseProps = {
    data: paginated,
    meta: {
      totalFetched: paginated.length,
      totalOverall: result.length,
    },
    params: {
      page,
      limit,
    },
  };

  return NextResponse.json(response, { status: 200 });
}
