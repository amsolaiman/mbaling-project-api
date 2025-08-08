import { NextRequest, NextResponse } from 'next/server';

// data
import { landlordDetails, landlordUsers, postList, postUploads } from '@/data';
// types
import { IUserItem } from '@/types/user';
import { ILandlordDetail } from '@/types/detail';
import { IUploadItem, PostResponse } from '@/types/post';

// ----------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-unused-vars */
export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const { searchParams } = request.nextUrl;

  const withUserParam = searchParams.get('createdBy');

  const isWithUser = withUserParam === 'true';

  if (withUserParam && !isWithUser) {
    return NextResponse.json(
      { message: 'Invalid query parameter. Use "createdBy=true" to include landlord details.' },
      { status: 400 }
    );
  }

  const postById = postList.find((_p) => _p.id === id);

  if (!postById) {
    return NextResponse.json({ message: 'Post not found.' }, { status: 404 });
  }

  const detail =
    landlordDetails.find((_d) => _d.id === postById.housingId) || ({} as ILandlordDetail);

  const user = landlordUsers.find((_u) => _u.id === detail.userId) || ({} as IUserItem);

  const uploads = postUploads.filter((_u) => _u.postId === postById.id) || ([] as IUploadItem[]);

  const result: PostResponse = {
    ...(({ housingId, ...rest }) => rest)(postById), // Exclude `housingId` from the response
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

  return NextResponse.json(result, { status: 200 });
}
