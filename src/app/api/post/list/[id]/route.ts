import { NextRequest, NextResponse } from 'next/server';

// utils
import { omit } from '@/utils/object';
// data
import { landlordDetails, landlordUsers, postList, postUploads } from '@/data';
// types
import { IUserItem } from '@/types/user';
import { ILandlordDetail } from '@/types/detail';
import { IUploadItem, PostResponse } from '@/types/post';

// ----------------------------------------------------------------------

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const { searchParams } = request.nextUrl;

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

  const postById = postList.find((post) => post.id === id);

  if (!postById) {
    return NextResponse.json({ message: 'Post not found.' }, { status: 404 });
  }

  const detail =
    landlordDetails.find((detail) => detail.id === postById.housingId) ||
    ({} as ILandlordDetail);

  const user =
    landlordUsers.find((user) => user.id === detail.userId) ||
    ({} as IUserItem);

  const uploads =
    postUploads.filter((upload) => upload.postId === postById.id) ||
    ([] as IUploadItem[]);

  const result: PostResponse = {
    ...omit(postById, ['housingId']),
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

  return NextResponse.json(result, { status: 200 });
}
