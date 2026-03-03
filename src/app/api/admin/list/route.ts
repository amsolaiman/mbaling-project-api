import { NextRequest, NextResponse } from 'next/server';

// utils
import { omit } from '@/utils/object';
// data
import { adminUsers } from '@/data';
// types
import { IResponse } from '@/types/response';
import { UserAdminResponse } from '@/types/user';
// constants
import { SEARCH_SORT_BY_DEFAULT, SearchOrderParams } from '@/constants/param';

// ----------------------------------------------------------------------

interface ResponseProps extends IResponse {
  data: UserAdminResponse[];
}

export async function GET(requst: NextRequest) {
  const { searchParams } = requst.nextUrl;

  const pageParam = searchParams.get('page');

  const limitParam = searchParams.get('limit');

  const sortParam = searchParams.get('sort');

  const orderParam = searchParams.get('order') as SearchOrderParams | null;

  if (limitParam && !pageParam) {
    return NextResponse.json(
      { message: 'Page parameter is required when limit is provided.' },
      { status: 400 }
    );
  }

  if (orderParam && !Object.values(SearchOrderParams).includes(orderParam)) {
    return NextResponse.json(
      { error: 'Parameter `order` must be either `asc` or `desc`.' },
      { status: 400 }
    );
  }

  //#region Fetching data
  const result: UserAdminResponse[] = adminUsers.map((user) => ({
    ...omit(user, ['password']),
  }));
  //#endregion

  //#region Sorting data
  const sort = sortParam || SEARCH_SORT_BY_DEFAULT;

  const order = orderParam || SearchOrderParams.ASC;

  result.sort((a, b) => {
    const aValue = (a as unknown as Record<string, unknown>)[sort];
    const bValue = (b as unknown as Record<string, unknown>)[sort];

    if (!aValue || !bValue) return 0;

    let comparison = 0;

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      comparison = aValue.localeCompare(bValue);
    } else {
      comparison = aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    }

    return order === SearchOrderParams.ASC ? comparison : -comparison;
  });
  //#endregion

  //#region Paginating data
  let paginated: UserAdminResponse[] = result;

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
      sort,
      order,
    },
  };

  return NextResponse.json(response, { status: 200 });
}
