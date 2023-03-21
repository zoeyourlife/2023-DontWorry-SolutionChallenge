interface IGetMainData {
  data: IGetMainDataItem[];
}

export interface IGetMainDataItem {
  title: string;
  createdDate: string;
  storeFileName: string;
}
