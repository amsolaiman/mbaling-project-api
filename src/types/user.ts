import { ILandlordDetail, IStudentDetail } from './detail';

// ----------------------------------------------------------------------

export interface IUserItem {
  id: string;
  username: string;
  password: string;
  role: string;
  firstName: string;
  lastName: string;
  middleName: string;
  nameExtension: string | null;
  fullName: string;
  dateOfBirth: Date | string;
  gender: string;
  email: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  avatarUrl: string | null;
  createdAt: Date | string | null;
  createdBy: string | null;
  updatedAt: Date | string | null;
  updatedBy: string | null;
  deletedAt: Date | string | null;
  deletedBy: string | null;
}

export interface UserLandlordResponse extends Omit<IUserItem, 'password'> {
  details: Omit<ILandlordDetail, 'userId'>;
}

export interface UserStudentResponse extends Omit<IUserItem, 'password'> {
  details: Omit<IStudentDetail, 'id' | 'userId'>;
}
