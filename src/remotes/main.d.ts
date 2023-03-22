interface IGetMainData {
  data: IGetMainDataItem[];
}

export interface IGetMainDataItem {
  title: string;
  createdDate: string;
  incidentDate: string;
  storeFileName: string;
  mainText: string;
}
