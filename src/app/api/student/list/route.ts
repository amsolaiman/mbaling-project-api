import { NextRequest, NextResponse } from 'next/server';

// data
import { studentUsers, studentDetails } from '@/data';
// types
import { IResponse } from '@/types/response';
import { IStudentDetail } from '@/types/detail';
import { UserStudentResponse } from '@/types/user';

// ----------------------------------------------------------------------

interface ResponseProps extends IResponse {
  data: UserStudentResponse[];
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
  let result: UserStudentResponse[] = studentUsers.map((_u) => {
    const detail = studentDetails.find((_d) => _d.userId === _u.id) || ({} as IStudentDetail);

    return {
      ..._u,
      password: undefined, // Exclude `password` from the response
      details: {
        ...detail,
        id: undefined, // Exclude `id` from the response
        userId: undefined, // Exclude `userId` from the response
      },
    };
  });
  //#endregion

  //#region Paginating data
  let paginatedResult: UserStudentResponse[] = result;

  const page = pageParam ? parseInt(pageParam, 10) : 1;

  if (isNaN(page) || page < 1) {
    return NextResponse.json({ message: 'Invalid page parameter.' }, { status: 400 });
  }

  const limit = limitParam ? parseInt(limitParam, 10) : result.length;

  if (isNaN(limit) || limit < 1) {
    return NextResponse.json({ message: 'Invalid limit parameter.' }, { status: 400 });
  }

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  paginatedResult = result.slice(startIndex, endIndex);
  //#endregion

  if (!paginatedResult.length) {
    return NextResponse.json({ message: 'No results found.' }, { status: 404 });
  }

  const response: ResponseProps = {
    data: paginatedResult,
    meta: {
      totalFetched: paginatedResult.length,
      totalOverall: result.length,
    },
    params: {
      page,
      limit,
    },
  };

  return NextResponse.json(response, { status: 200 });
}
