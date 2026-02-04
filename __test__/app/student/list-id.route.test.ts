import { NextRequest } from 'next/server';

import { GET } from '@/app/api/student/list/[id]/route';
// utils
import { omit } from '@/utils/object';
// data
import { studentDetails, studentUsers } from '@/data';

// ----------------------------------------------------------------------

describe('GET /api/student/list/[id]', () => {
  it('returns Student details by id', async () => {
    const id = '4d56b5f0-591b-4a53-8397-98bdce8b7f83';

    const request = new NextRequest(
      `http://localhost:3000/api/student/list/${id}`
    );

    const context = {
      params: Promise.resolve({ id }),
    };

    const response = await GET(request, context);
    const body = await response.json();

    expect(response.status).toBe(200);

    const userById = studentUsers[1];

    const detail =
      studentDetails.find((detail) => detail.userId === userById.id) ||
      ({} as (typeof studentDetails)[number]);

    expect(body).toEqual({
      ...omit(userById, ['password']),
      details: omit(detail, ['id', 'userId']),
    });
  });
});
