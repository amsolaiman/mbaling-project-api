import { NextRequest, NextResponse } from 'next/server';

// utils
import { omit } from '@/utils/object';
// data
import { studentDetails, studentUsers } from '@/data';
// types
import { IStudentDetail } from '@/types/detail';
import { UserStudentResponse } from '@/types/user';

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

  const result: UserStudentResponse = {
    ...omit(userById, ['password']),
    details: omit(detail, ['id', 'userId']),
  };

  return NextResponse.json(result, { status: 200 });
}
