import { NextRequest } from 'next/server';

import { GET } from '@/app/api/student/list/route';

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

    expect(body.data).toEqual([
      {
        id: 'ef21eca0-15f5-4b80-bfab-e4b59ac01e04',
        username: 'minho_yamamoto',
        role: 'student',
        firstName: 'Minho',
        lastName: 'Yamamoto',
        middleName: 'Clave',
        nameExtension: null,
        fullName: 'Minho C. Yamamoto',
        dateOfBirth: '2005-05-17',
        gender: 'male',
        email: 'minho_yamamoto2005@example.com',
        phoneNumber: '+639386602896',
        addressLine1: '221 Candido Street',
        addressLine2: 'Tetuan',
        addressLine3: 'City of Zamboanga',
        addressLine4: 'Zamboanga Del Sur',
        avatarUrl: 'http://localhost:3000/assets/avatar/student/avatar_12.png',
        createdAt: '2019-04-09T10:20:35',
        createdBy: '8c7f37a3-6c4b-4a57-b189-bc36f16724e3',
        updatedAt: '2019-09-05T18:44:59',
        updatedBy: '8c7f37a3-6c4b-4a57-b189-bc36f16724e3',
        deletedAt: null,
        deletedBy: null,
        details: {
          studentId: '201909485',
          degree: 'Bachelor of Science in Biology',
          department: 'Department of Biology',
          college: 'College of Natural Sciences and Mathematics',
          housingId: null,
          applicationId: null,
        },
      },
      {
        id: 'abbd191e-49fd-4025-9965-e6f90acf0e9b',
        username: 'kuhei.yamyam',
        role: 'student',
        firstName: 'Kuhei',
        lastName: 'Yamamoto',
        middleName: 'Clave',
        nameExtension: null,
        fullName: 'Kuhei C. Yamamoto',
        dateOfBirth: '2005-05-17',
        gender: 'male',
        email: 'kuheiyammoto_05@example.com',
        phoneNumber: '+639881045437',
        addressLine1: '221 Candido Street',
        addressLine2: 'Tetuan',
        addressLine3: 'City of Zamboanga',
        addressLine4: 'Zamboanga Del Sur',
        avatarUrl: 'http://localhost:3000/assets/avatar/student/avatar_13.png',
        createdAt: '2019-04-09T10:25:35',
        createdBy: '8c7f37a3-6c4b-4a57-b189-bc36f16724e3',
        updatedAt: '2019-12-01T16:58:11',
        updatedBy: '8c7f37a3-6c4b-4a57-b189-bc36f16724e3',
        deletedAt: null,
        deletedBy: null,
        details: {
          studentId: '201909490',
          degree: 'Bachelor of Science in Mathematics',
          department: 'Department of Mathematics',
          college: 'College of Natural Sciences and Mathematics',
          housingId: null,
          applicationId: null,
        },
      },
      {
        id: '30b39d5f-a7e4-49f3-90ff-175d430d8924',
        username: 'fatima.jasmagandia',
        role: 'student',
        firstName: 'Fatima',
        lastName: 'Magandia',
        middleName: 'Jasmine',
        nameExtension: null,
        fullName: 'Fatima J. Magandia',
        dateOfBirth: '2003-03-24',
        gender: 'female',
        email: 'fatima.jasmagandia@example.com',
        phoneNumber: '+639704078436',
        addressLine1: '569 Bliss-Pantar Road',
        addressLine2: 'Libertad',
        addressLine3: 'Kolambugan',
        addressLine4: 'Lanao Del Norte',
        avatarUrl: 'http://localhost:3000/assets/avatar/student/avatar_14.png',
        createdAt: '2019-10-08T13:01:45',
        createdBy: '8c7f37a3-6c4b-4a57-b189-bc36f16724e3',
        updatedAt: '2020-01-12T19:37:26',
        updatedBy: '8c7f37a3-6c4b-4a57-b189-bc36f16724e3',
        deletedAt: null,
        deletedBy: null,
        details: {
          studentId: '201895388',
          degree: 'Bachelor of Arts in Psychology',
          department: 'Department of Psychology',
          college: 'College of Social Sciences and Humanities',
          housingId: null,
          applicationId: null,
        },
      },
    ]);
  });
});
