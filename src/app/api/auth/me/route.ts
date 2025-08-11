import { NextRequest, NextResponse } from 'next/server';

// utils
import authenticateAccessToken from '@/utils/auth-token';
// data
import { landlordDetails, landlordUsers, studentDetails, studentUsers } from '@/data';
// types
import { ILandlordDetail, IStudentDetail } from '@/types/detail';
import { DemoLandlordResponse, DemoStudentResponse } from '@/types/demo';

// ----------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-unused-vars */
export async function GET(request: NextRequest) {
  const auth = await authenticateAccessToken(request);

  if (auth instanceof NextRequest) {
    return auth; // Return the NextResponse if authentication failed
  }

  const user = auth as { id: string; email: string };

  const userList = [...landlordUsers, ...studentUsers];

  //#region Checking user
  const foundUser = userList.find((_u) => _u.id === user.id);

  if (!foundUser) {
    return NextResponse.json({ message: 'User not found.' }, { status: 404 });
  }
  //#endregion

  if (foundUser.role === 'landlord') {
    const detailById =
      landlordDetails.find((_d) => _d.userId === foundUser.id) || ({} as ILandlordDetail);

    const result: DemoLandlordResponse = {
      ...(({ password, ...rest }) => rest)(foundUser), // Exclude `password` from the response
      details: (({ userId, ...rest }) => rest)(detailById), // Exclude `userId` from the response
    };

    return NextResponse.json({ user: result }, { status: 200 });
  }

  if (foundUser.role === 'student') {
    const detailById =
      studentDetails.find((_d) => _d.userId === foundUser.id) || ({} as IStudentDetail);

    const result: DemoStudentResponse = {
      ...(({ password, ...rest }) => rest)(foundUser), // Exclude `password` from the response
      details: (({ id, userId, ...rest }) => rest)(detailById), // Exclude `id` and `userId` from the response
    };

    return NextResponse.json({ user: result }, { status: 200 });
  }

  const result = (({ password, ...rest }) => rest)(foundUser); // Exclude `password` from the response

  return NextResponse.json({ user: result }, { status: 200 });
}
