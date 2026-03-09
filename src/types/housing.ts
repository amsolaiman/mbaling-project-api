import { UserStudentResponse } from './user';

// ----------------------------------------------------------------------

export interface IApplicationItem {
  id: string;
  housingId: string;
  createdAt: Date | string;
  createdBy: string;
}

export interface HousingApplicantResponse extends IApplicationItem {
  studentDetails: UserStudentResponse;
}
