import { NextRequest, NextResponse } from 'next/server';

// utils
import { omit } from '@/utils/object';
// data
import { landlordDetails, landlordUsers } from '@/data';
// types
import { ILandlordDetail } from '@/types/detail';
import { UserLandlordResponse } from '@/types/user';

// ----------------------------------------------------------------------

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const userById = landlordUsers.find((user) => user.id === id);

  if (!userById) {
    return NextResponse.json({ message: 'User not found.' }, { status: 404 });
  }

  const detail =
    landlordDetails.find((detail) => detail.userId === userById.id) ||
    ({} as ILandlordDetail);

  const result: UserLandlordResponse = {
    ...omit(userById, ['password']),
    details: omit(detail, ['userId']),
  };

  return NextResponse.json(result, { status: 200 });
}
