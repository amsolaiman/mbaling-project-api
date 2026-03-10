import { NextRequest, NextResponse } from 'next/server';

// utils
import { omit } from '@/utils/object';
// data
import {
  applicationList,
  landlordDetails,
  landlordUsers,
  studentDetails,
  studentUsers,
} from '@/data';
// types
import { IUserItem } from '@/types/user';
import { ILandlordDetail, IStudentDetail } from '@/types/detail';
import { IApplicationItem, StudentApplicationResponse } from '@/types/housing';

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

  const applicationById =
    applicationList.find((appl) => appl.id === detail.applicationId) ||
    ({} as IApplicationItem);

  if (!applicationById.id) {
    return NextResponse.json({ message: 'No results found.' }, { status: 404 });
  }

  const landlordDetailById =
    landlordDetails.find((detail) => detail.id === applicationById.housingId) ||
    ({} as ILandlordDetail);

  const landlordUserById =
    landlordUsers.find((user) => user.id === landlordDetailById.userId) ||
    ({} as IUserItem);

  const result: StudentApplicationResponse = {
    ...applicationById,
    housingDetails: {
      ...omit(landlordUserById, ['password']),
      details: omit(landlordDetailById, ['userId']),
    },
  };

  return NextResponse.json(result, { status: 200 });
}
