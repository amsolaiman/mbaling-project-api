import { UserLandlordResponse } from './user';

// ----------------------------------------------------------------------

export interface IPostItem {
  id: string;
  housingId: string;
  title: string;
  description: string;
  price: number;
  isVisible: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
  deletedAt: Date | string | null;
}

export interface IUploadItem {
  id: string;
  postId: string;
  imgUrl: string;
}

export interface PostResponse extends Omit<IPostItem, 'housingId'> {
  uploads: Omit<IUploadItem, 'postId'>[];
  createdBy?: UserLandlordResponse;
}
