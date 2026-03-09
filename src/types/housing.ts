import { UserStudentResponse } from './user';

// ----------------------------------------------------------------------

export interface IApplicationItem {
  id: string;
  housingId: string;
  createdAt: Date | string;
  createdBy: string;
  deletedAt: Date | string | null;
  deletedBy: string | null;
}

export interface HousingApplicantResponse extends IApplicationItem {
  studentDetails: UserStudentResponse;
}
