import { NextRequest, NextResponse } from 'next/server';

// data
import { IStudentDetail } from '@/types/detail';
import { UserStudentResponse } from '@/types/user';
import { studentDetails, studentUsers } from '@/data';

// ----------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-unused-vars */
export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const userById = studentUsers.find((_u) => _u.id === id);

  if (!userById) {
    return NextResponse.json({ message: 'User not found.' }, { status: 404 });
  }

  const detail = studentDetails.find((_d) => _d.userId === userById.id) || ({} as IStudentDetail);

  const { password, ...user } = userById; // Exclude `password` from the response

  const result: UserStudentResponse = {
    ...user,
    details: (({ id, userId, ...rest }) => rest)(detail), // Exclude `id` and `userId` from the response
  };

  return NextResponse.json(result, { status: 200 });
}
