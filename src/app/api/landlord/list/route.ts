import { NextRequest, NextResponse } from 'next/server';

// utils
import { omit } from '@/utils/object';
// data
import { landlordUsers, landlordDetails } from '@/data';
// types
import { IResponse } from '@/types/response';
import { ILandlordDetail } from '@/types/detail';
import { UserLandlordResponse } from '@/types/user';

// ----------------------------------------------------------------------

interface ResponseProps extends IResponse {
  data: UserLandlordResponse[];
}

export async function GET(requst: NextRequest) {
  const { searchParams } = requst.nextUrl;

  const pageParam = searchParams.get('page');

  const limitParam = searchParams.get('limit');

  if (limitParam && !pageParam) {
    return NextResponse.json(
      { message: 'Page parameter is required when limit is provided.' },
      { status: 400 }
    );
  }

  //#region Fetching data
  const result: UserLandlordResponse[] = landlordUsers.map((user) => {
    const detail =
      landlordDetails.find((detail) => detail.userId === user.id) ||
      ({} as ILandlordDetail);

    return {
      ...omit(user, ['password']),
      details: omit(detail, ['userId']),
    };
  });
  //#endregion

  //#region Paginating data
  let paginated: UserLandlordResponse[] = result;

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
