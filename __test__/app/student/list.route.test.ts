import { NextRequest } from 'next/server';

import { GET } from '@/app/api/student/list/route';
import { studentDetails, studentUsers } from '@/data';

// ----------------------------------------------------------------------

/* eslint-disable @typescript-eslint/no-unused-vars */
describe('GET /api/student/list', () => {
  it('returns paginated Student list for limit=3 & page=5', async () => {
    const url = 'http://localhost:3000/api/student/list?limit=3&page=5';

    const request = new NextRequest(url);

    const response = await GET(request);
    const body = await response.json();

    expect(response.status).toBe(200);

    expect(body.meta).toEqual({
      totalFetched: 3,
      totalOverall: 21,
    });

    expect(body.params).toEqual({
      page: 5,
      limit: 3,
    });

    expect(body.data).toHaveLength(3);

    expect(body.data).toEqual(
      studentUsers.slice(12, 15).map((user) => {
        const { password: _password, ...users } = user;

        const detail = studentDetails.find(
          (detail) => detail.userId === user.id
        );
        const { id: _id, userId: _userId, ...details } = detail!;

        return {
          ...users,
          details,
        };
      })
    );
  });
});
