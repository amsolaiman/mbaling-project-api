// types
import { IUserItem } from '@/types/user';
import { IPostItem, IUploadItem } from '@/types/post';
import { ILandlordDetail, IStudentDetail } from '@/types/detail';

// students
import studentUsersJson from './student-users.json';
import studentDetailsJson from './student-details.json';
// landlords
import landlordUsersJson from './landlord-users.json';
import landlordDetailsJson from './landlord-details.json';
// posts
import postListJson from './post-list.json';
import postUploadsJson from './post-uploads.json';

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

export const postList = postListJson as Array<IPostItem>;

export const postUploads = postUploadsJson.map((upload) => ({
  ...upload,
  imageUrl: `${process.env.NEXT_PUBLIC_HOST_URL}${upload.imgUrl}`,
})) as Array<IUploadItem>;
