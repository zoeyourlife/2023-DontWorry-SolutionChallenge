import { IPhoto } from "src/remotes/photo";

interface IPostWriteData {
  title: string;
  category: IPostCategory[];
  mainText: string;
  userId: string;
  location: string;
  files: IPhoto[];
  incidentDate: string;
}

interface IPostCategory {
  id: number;
  categoryName: string;
  posts: null;
}
