import { NextRequest, NextResponse } from 'next/server';

// utils
import { omit } from '@/utils/object';
import { authenticateAccessToken } from '@/utils/auth';
// data
import {
  adminUsers,
  landlordDetails,
  landlordUsers,
  studentDetails,
  studentUsers,
} from '@/data';
// types
import { ILandlordDetail, IStudentDetail } from '@/types/detail';
import { UserLandlordResponse, UserStudentResponse } from '@/types/user';

// ----------------------------------------------------------------------

export async function GET(request: NextRequest) {
  const auth = await authenticateAccessToken(request);

  if (auth instanceof NextResponse) {
    return auth;
  }

  const userAuth = auth as { id: string; email: string };

  const userList = [...adminUsers, ...landlordUsers, ...studentUsers];

  //#region Checking user
  const foundUser = userList.find((user) => user.id === userAuth.id);

  if (!foundUser) {
    return NextResponse.json({ message: 'User not found.' }, { status: 404 });
  }
  //#endregion

  if (foundUser.role === 'landlord') {
    const detail =
      landlordDetails.find((detail) => detail.userId === foundUser.id) ||
      ({} as ILandlordDetail);

    const result: UserLandlordResponse = {
      ...omit(foundUser, ['password']),
      details: omit(detail, ['userId']),
    };

    return NextResponse.json({ user: result }, { status: 200 });
  }

  if (foundUser.role === 'student') {
    const detail =
      studentDetails.find((detail) => detail.userId === foundUser.id) ||
      ({} as IStudentDetail);

    const result: UserStudentResponse = {
      ...omit(foundUser, ['password']),
      details: omit(detail, ['id', 'userId']),
    };

    return NextResponse.json({ user: result }, { status: 200 });
  }

  const result = omit(foundUser, ['password']);

  return NextResponse.json({ user: result }, { status: 200 });
}
