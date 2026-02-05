import { NextRequest } from 'next/server';

import { GET } from '@/app/api/post/list/[id]/route';
// utils
import { omit } from '@/utils/object';
// data
import { postList, postUploads } from '@/data';

// ----------------------------------------------------------------------

describe('GET /api/post/list/[id]', () => {
  it('returns Post details by id', async () => {
    const id = '763bfcfc-2b6e-478d-914e-3dfc1cb29209';

    const request = new NextRequest(
      `http://localhost:3000/api/post/list/${id}`
    );

    const context = {
      params: Promise.resolve({ id }),
    };

    const response = await GET(request, context);
    const body = await response.json();

    expect(response.status).toBe(200);

    const postById = postList[1];

    const uploads =
      postUploads.filter((upload) => upload.postId === postById.id) ||
      ([] as (typeof postUploads)[number][]);

    expect(body).toEqual({
      ...omit(postById, ['housingId']),
      uploads: uploads.map((upload) => ({
        ...omit(upload, ['postId']),
      })),
    });
  });
});
