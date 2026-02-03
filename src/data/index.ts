import { IUserItem } from '@/types/user';
import { IStudentDetail } from '@/types/detail';

// students
import studentUsersJson from './student-users.json';
import studentDetailsJson from './student-details.json';

// ----------------------------------------------------------------------

export const studentUsers = studentUsersJson.map((user) => ({
  ...user,
  avatarUrl: `${process.env.NEXT_PUBLIC_HOST_URL}${user.avatarUrl}`,
})) as Array<IUserItem>;

export const studentDetails = studentDetailsJson as Array<IStudentDetail>;
