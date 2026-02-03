import { NextRequest } from 'next/server';

import { GET } from '@/app/api/student/list/route';

// utils
import { omit } from '@/utils/object';
// data
import { studentDetails, studentUsers } from '@/data';

// ----------------------------------------------------------------------

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
        const detail =
          studentDetails.find((detail) => detail.userId === user.id) ||
          ({} as (typeof studentDetails)[number]);

        return {
          ...omit(user, ['password']),
          details: omit(detail, ['id', 'userId']),
        };
      })
    );
  });
});
