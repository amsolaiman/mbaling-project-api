import { NextRequest } from 'next/server';

import { GET } from '@/app/api/student/list/[id]/route';

// ----------------------------------------------------------------------

describe('GET /api/student/list/[id]', () => {
  it('returns student details by id', async () => {
    const studentId = '4d56b5f0-591b-4a53-8397-98bdce8b7f83';

    const request = new NextRequest(
      `http://localhost:3000/api/student/list/${studentId}`
    );

    const context = {
      params: Promise.resolve({ id: studentId }),
    };

    const response = await GET(request, context);
    const body = await response.json();

    expect(response.status).toBe(200);

    expect(body).toEqual({
      id: '4d56b5f0-591b-4a53-8397-98bdce8b7f83',
      username: 'yuto_kim',
      role: 'student',
      firstName: 'Yuto',
      lastName: 'Kim',
      middleName: 'Legazpi',
      nameExtension: null,
      fullName: 'Yuto L. Kim',
      dateOfBirth: '2002-03-06',
      gender: 'male',
      email: 'yutokim02@example.com',
      phoneNumber: '+639263593225',
      addressLine1: '569 Abandoned Road',
      addressLine2: 'Lapu-lapu Pob.',
      addressLine3: 'City of Butuan',
      addressLine4: 'Agusan Del Norte',
      avatarUrl: 'http://localhost:3000/assets/avatar/student/avatar_1.png',
      createdAt: '2019-01-15T08:23:42',
      createdBy: '8c7f37a3-6c4b-4a57-b189-bc36f16724e3',
      updatedAt: '2019-03-22T11:17:54',
      updatedBy: '8c7f37a3-6c4b-4a57-b189-bc36f16724e3',
      deletedAt: null,
      deletedBy: null,
      details: {
        studentId: '201869451',
        degree:
          'Bachelor of Science in Information Technology (Database Systems)',
        department: 'Department of Information Sciences',
        college: 'College of Information and Computing Sciences',
        housingId: null,
        applicationId: null,
      },
    });
  });
});
