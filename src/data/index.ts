// types
import { IUserItem } from '@/types/user';
import { ILandlordDetail, IStudentDetail } from '@/types/detail';

// students
import studentUsersJson from './student-users.json';
import studentDetailsJson from './student-details.json';
// landlords
import landlordUsersJson from './landlord-users.json';
import landlordDetailsJson from './landlord-details.json';

// ----------------------------------------------------------------------

export const landlordUsers = landlordUsersJson.map((user) => ({
  ...user,
  avatarUrl: `${process.env.NEXT_PUBLIC_HOST_URL}${user.avatarUrl}`,
})) as Array<IUserItem>;

export const landlordDetails = landlordDetailsJson as Array<ILandlordDetail>;

export const studentUsers = studentUsersJson.map((user) => ({
  ...user,
  avatarUrl: `${process.env.NEXT_PUBLIC_HOST_URL}${user.avatarUrl}`,
})) as Array<IUserItem>;

export const studentDetails = studentDetailsJson as Array<IStudentDetail>;
