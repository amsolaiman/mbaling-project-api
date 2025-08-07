// students
import studentUsersJson from './student-users.json';
import studentDetailsJson from './student-details.json';
// landlords
import landlordUsersJson from './landlord-users.json';
import landlordDetailsJson from './landlord-details.json';

// ----------------------------------------------------------------------

export const studentUsers = studentUsersJson.map((user) => ({
  ...user,
  avatarUrl: `${process.env.NEXT_PUBLIC_HOST_URL}${user.avatarUrl}`,
}));

export const landlordUsers = landlordUsersJson.map((user) => ({
  ...user,
  avatarUrl: `${process.env.NEXT_PUBLIC_HOST_URL}${user.avatarUrl}`,
}));

export {
  studentDetailsJson as studentDetails,
  landlordDetailsJson as landlordDetails,
};
