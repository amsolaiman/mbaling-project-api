import { NextRequest, NextResponse } from 'next/server';

// utils
import { omit } from '@/utils/object';
// data
import {
  landlordDetails,
  landlordUsers,
  studentDetails,
  studentUsers,
} from '@/data';
// types
import { IUserItem, UserLandlordResponse } from '@/types/user';
import { ILandlordDetail, IStudentDetail } from '@/types/detail';

// ----------------------------------------------------------------------

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const userById = studentUsers.find((user) => user.id === id);

  if (!userById) {
    return NextResponse.json({ message: 'User not found.' }, { status: 404 });
  }

  const detail =
    studentDetails.find((detail) => detail.userId === userById.id) ||
    ({} as IStudentDetail);

  const housingById =
    landlordDetails.find((appl) => appl.id === detail.housingId) ||
    ({} as ILandlordDetail);

  if (!housingById.id) {
    return NextResponse.json({ message: 'No results found.' }, { status: 404 });
  }

  const landlordUserById =
    landlordUsers.find((user) => user.id === housingById.userId) ||
    ({} as IUserItem);

  const result: UserLandlordResponse = {
    ...omit(landlordUserById, ['password']),
    details: omit(housingById, ['userId']),
  };

  return NextResponse.json(result, { status: 200 });
}
