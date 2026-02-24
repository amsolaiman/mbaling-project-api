import { NextRequest } from 'next/server';

import { GET } from '@/app/api/admin/list/[id]/route';
// utils
import { omit } from '@/utils/object';
// data
import { adminUsers } from '@/data';

// ----------------------------------------------------------------------

describe('GET /api/admin/list/[id]', () => {
  it('returns Admin details by id', async () => {
    const id = '43b5c06e-e167-4643-a6de-271b6a9e3937';

    const request = new NextRequest(
      `http://localhost:3000/api/admin/list/${id}`
    );

    const context = {
      params: Promise.resolve({ id }),
    };

    const response = await GET(request, context);
    const body = await response.json();

    expect(response.status).toBe(200);

    const userById = adminUsers[1];

    expect(body).toEqual({
      ...omit(userById, ['password']),
    });
  });
});
