import { NextResponse } from 'next/server';

import { GET } from '@/app/route';

describe('GET /api', () => {
  it("returns 'Hello world!' JSON response", async () => {
    const response = await GET();

    expect(response).toBeInstanceOf(NextResponse);

    const json = await response.json();

    expect(json).toEqual({ message: 'Hello world!' });
  });
});
