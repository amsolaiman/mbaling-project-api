import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';

// utils
import { generateAccessToken } from '@/utils/auth';
// data
import { adminUsers, landlordUsers, studentUsers } from '@/data';

// ----------------------------------------------------------------------

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  const userList = [...adminUsers, ...landlordUsers, ...studentUsers];

  //#region Checking username
  const user = userList.find((user) => user.username === username);

  if (!user) {
    return NextResponse.json({ message: 'Invalid username.' }, { status: 401 });
  }
  //#endregion

  //#region Checking password
  const isPasswordValid = bcrypt.compareSync(password, user.password);

  if (!isPasswordValid) {
    return NextResponse.json({ message: 'Invalid password.' }, { status: 401 });
  }
  //#endregion

  const accessToken = generateAccessToken(user);

  return NextResponse.json(
    { message: 'Login successful.', accessToken },
    { status: 200 }
  );
}
