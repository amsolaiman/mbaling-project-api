import { NextResponse } from 'next/server';

import { GET } from '../../src/app/route';

// Mock environment variable for testing
process.env.NEXT_PUBLIC_HOST_URL = 'http://localhost:3000';

describe('GET /api', () => {
  it("returns 'Hello world!' JSON response", async () => {
    const response = await GET();

    expect(response).toBeInstanceOf(NextResponse);

    const json = await response.json();

    expect(json).toEqual({ message: 'Hello world! http://localhost:3000' });
  });
});
