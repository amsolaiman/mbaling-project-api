// ----------------------------------------------------------------------

export interface ILandlordDetail {
  id: string;
  userId: string;
  housingName: string;
  chatLink: string | null;
  mapLink: string | null;
}

export interface IStudentDetail {
  id: string;
  userId: string;
  studentId: string;
  degree: string;
  department: string;
  college: string;
  housingId: string | null;
  applicationId: string | null;
}
