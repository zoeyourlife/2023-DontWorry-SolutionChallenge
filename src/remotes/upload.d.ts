import { IPhoto } from "src/remotes/photo";

export interface IPostWriteData {
  title: string;
  category: string | string[];
  mainText: string;
  userId: string;
  location: string;
  imagesFiles: IPhoto[];
  incidentDate: string;
}
