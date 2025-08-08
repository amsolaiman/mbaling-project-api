import { NextRequest, NextResponse } from 'next/server';

// data
import { landlordDetails, landlordUsers, postList, postUploads } from '@/data';
// types
import { IUserItem } from '@/types/user';
import { ILandlordDetail } from '@/types/detail';
import { IUploadItem, PostResponse } from '@/types/post';

// ----------------------------------------------------------------------

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const withUserParam = searchParams.get('createdBy');

  const isWithUser = withUserParam === 'true';

  if (withUserParam && !isWithUser) {
    return NextResponse.json(
      { message: 'Invalid query parameter. Use "createdBy=true" to include landlord details.' },
      { status: 400 }
    );
  }

  //#region Fetching data
  const result: PostResponse[] = postList.map((_p) => {
    const detail = landlordDetails.find((_d) => _d.id === _p.housingId) || ({} as ILandlordDetail);

    const user = landlordUsers.find((_u) => _u.id === detail.userId) || ({} as IUserItem);

    const uploads = postUploads.filter((_u) => _u.postId === _p.id) || ([] as IUploadItem[]);

    return {
      ..._p,
      housingId: undefined, // Exclude housingId from the response
      uploads: uploads.map((_u) => ({
        ..._u,
        postId: undefined, // Exclude postId from the response
      })),
      createdBy: isWithUser
        ? {
            ...user,
            details: detail,
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
