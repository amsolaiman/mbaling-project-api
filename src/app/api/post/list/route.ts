import { NextRequest, NextResponse } from 'next/server';

// utils
import { omit } from '@/utils/object';
// data
import { landlordDetails, landlordUsers, postList, postUploads } from '@/data';
// types
import { IResponse } from '@/types/response';
import { IUserItem } from '@/types/user';
import { ILandlordDetail } from '@/types/detail';
import { IUploadItem, PostResponse } from '@/types/post';

// ----------------------------------------------------------------------

interface ResponseProps extends IResponse {
  data: PostResponse[];
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const pageParam = searchParams.get('page');

  const limitParam = searchParams.get('limit');

  if (limitParam && !pageParam) {
    return NextResponse.json(
      { message: 'Page parameter is required when limit is provided.' },
      { status: 400 }
    );
  }

  const withUserParam = searchParams.get('createdBy');

  const isWithUser = withUserParam === 'true';

  if (withUserParam && !isWithUser) {
    return NextResponse.json(
      {
        message:
          'Invalid query parameter. Use "createdBy=true" to include landlord details.',
      },
      { status: 400 }
    );
  }

  //#region Fetching data
  const result: PostResponse[] = postList.map((post) => {
    const detail =
      landlordDetails.find((detail) => detail.id === post.housingId) ||
      ({} as ILandlordDetail);

    const user =
      landlordUsers.find((user) => user.id === detail.userId) ||
      ({} as IUserItem);

    const uploads =
      postUploads.filter((upload) => upload.postId === post.id) ||
      ([] as IUploadItem[]);

    return {
      ...omit(post, ['housingId']),
      uploads: uploads.map((upload) => ({
        ...omit(upload, ['postId']),
      })),
      createdBy: isWithUser
        ? {
            ...omit(user, ['password']),
            details: omit(detail, ['userId']),
          }
        : undefined,
    };
  });
  //#endregion

  //#region Paginating data
  let paginated: PostResponse[] = result;

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
