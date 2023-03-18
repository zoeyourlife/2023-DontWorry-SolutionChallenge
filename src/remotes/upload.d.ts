import { IPhoto } from "src/remotes/photo";

export interface IPostWriteData {
  title: string;
  category: IPostCategory[];
  mainText: string;
  userId: string;
  location: string;
  imagesFiles: IPhoto[];
  incidentDate: string;
}

interface IPostCategory {
  id: number;
  categoryName: string;
  posts: null;
}
