import { NextRequest } from 'next/server';

import { GET } from '@/app/api/post/user/route';
// utils
import { omit } from '@/utils/object';
// data
import { landlordDetails, postList, postUploads } from '@/data';

// ----------------------------------------------------------------------

describe('GET /api/post/user', () => {
  it('returns paginated Post list by a user', async () => {
    const id = 'f5b2a8d5-9e7c-4bfa-bb99-88c1e9c458d3';

    const url = `http://localhost:3000/api/post/user?id=${id}`;

    const request = new NextRequest(url);

    const response = await GET(request);
    const body = await response.json();

    const housingDetail = landlordDetails.find(
      (detail) => detail.userId === id
    );

    const filteredPostList =
      postList.filter((post) => post.housingId === housingDetail?.id) ||
      ([] as (typeof postList)[number][]);

    expect(response.status).toBe(200);

    expect(body.meta).toEqual({
      totalFetched: 3,
      totalOverall: 3,
    });

    expect(body.params).toEqual({
      page: 1,
      limit: 3,
    });

    expect(body.data).toHaveLength(3);

    expect(body.data).toEqual(
      filteredPostList.map((post) => {
        const uploads =
          postUploads.filter((upload) => upload.postId === post.id) ||
          ([] as (typeof postUploads)[number][]);

        return {
          ...omit(post, ['housingId']),
          uploads: uploads.map((upload) => ({
            ...omit(upload, ['postId']),
          })),
        };
      })
    );
  });
});
