import { NextRequest, NextResponse } from 'next/server';

// data
import { ILandlordDetail } from '@/types/detail';
import { UserLandlordResponse } from '@/types/user';
import { landlordDetails, landlordUsers } from '@/data';

// ----------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-unused-vars */
export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const userById = landlordUsers.find((_u) => _u.id === id);

  if (!userById) {
    return NextResponse.json({ message: 'User not found.' }, { status: 404 });
  }

  const detail = landlordDetails.find((_d) => _d.userId === userById.id) || ({} as ILandlordDetail);

  const { password, ...user } = userById;

  const { userId, ...details } = detail;

  const result: UserLandlordResponse = {
    ...user,
    details,
  };

  return NextResponse.json(result, { status: 200 });
}
