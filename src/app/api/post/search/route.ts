import { NextRequest, NextResponse } from 'next/server';

// data
import { landlordDetails, landlordUsers, postList, postUploads } from '@/data';
// types
import { IUserItem } from '@/types/user';
import { ILandlordDetail } from '@/types/detail';
import { IUploadItem, PostResponse } from '@/types/post';

// ----------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-unused-vars */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const queryParam = searchParams.get('query')?.toLowerCase();

  const withUserParam = searchParams.get('createdBy');

  if (queryParam && !queryParam.trim()) {
    return NextResponse.json({ message: 'Query parameter cannot be empty.' }, { status: 400 });
  }

  const isWithUser = withUserParam === 'true';

  if (withUserParam && !isWithUser) {
    return NextResponse.json(
      { message: 'Invalid query parameter. Use "createdBy=true" to include landlord details.' },
      { status: 400 }
    );
  }

  const filteredPosts = queryParam
    ? postList.filter((post) => post.title.toLowerCase().includes(queryParam))
    : postList;

  //#region Fetching data
  const result: PostResponse[] = filteredPosts.map((_p) => {
    const detail = landlordDetails.find((_d) => _d.id === _p.housingId) || ({} as ILandlordDetail);

    const user = landlordUsers.find((_u) => _u.id === detail.userId) || ({} as IUserItem);

    const uploads = postUploads.filter((_u) => _u.postId === _p.id) || ([] as IUploadItem[]);

    return {
      ...(({ housingId, ...rest }) => rest)(_p), // Exclude `housingId` from the response
      uploads: uploads.map((_u) => ({
        ...(({ postId, ...rest }) => rest)(_u), // Exclude `postId` from the response
      })),
      createdBy: isWithUser
        ? {
            ...(({ password, ...rest }) => rest)(user), // Exclude `password` from the response
            details: (({ userId, ...rest }) => rest)(detail), // Exclude `userId` from the response
          }
        : undefined, // Include landlord details if createdBy is true
    };
  });
  //#endregion

  if (!result.length) {
    return NextResponse.json({ message: 'No results found.' }, { status: 404 });
  }

  return NextResponse.json(result, { status: 200 });
}
