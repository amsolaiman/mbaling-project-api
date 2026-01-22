import { NextRequest } from 'next/server';

import { GET } from '@/app/api/landlord/list/[id]/route';

// ----------------------------------------------------------------------

describe('GET /api/landlord/list/[id]', () => {
  it('returns Landlord details by id', async () => {
    const landlordId = 'aad5d657-3ecb-4c4e-b56e-60c0845f92a5';

    const request = new NextRequest(
      `http://localhost:3000/api/landlord/list/${landlordId}`
    );

    const context = {
      params: Promise.resolve({ id: landlordId }),
    };

    const response = await GET(request, context);
    const body = await response.json();

    expect(response.status).toBe(200);

    expect(body).toEqual({
      id: 'aad5d657-3ecb-4c4e-b56e-60c0845f92a5',
      username: 'abdullah_mamintal',
      role: 'landlord',
      firstName: 'Abdullah',
      lastName: 'Mamintal',
      middleName: 'Guimbal',
      nameExtension: 'Jr.',
      fullName: 'Abdullah G. Mamintal, Jr.',
      dateOfBirth: '1978-06-10',
      gender: 'male',
      email: 'abdullah.mamintal@example.com',
      phoneNumber: '+639295654439',
      addressLine1: '036 Laguindab Road',
      addressLine2: 'Cadayonan I',
      addressLine3: 'City of Marawi',
      addressLine4: 'Lanao Del Sur',
      avatarUrl: 'http://localhost:3000/assets/avatar/landlord/avatar_1.png',
      createdAt: '2019-04-03T04:56:18',
      createdBy: '8c7f37a3-6c4b-4a57-b189-bc36f16724e3',
      updatedAt: '2023-07-22T12:47:44',
      updatedBy: 'b1dc27e6-8bd3-4411-9d6d-0895e0634ef6',
      deletedAt: null,
      deletedBy: null,
      details: {
        id: '02c78542-0f07-4268-ac73-29b29e512eb1',
        housingName: 'Mamintal Rental Cottages',
        chatLink: 'https://m.me/abdullah_mamintal',
        mapLink: null,
      },
    });
  });
});
