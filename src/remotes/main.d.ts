interface IGetMainData {
  data: IGetMainDataItem[];
}

export interface IGetMainDataItem {
  id: number;
  title: string;
  createdDate: string;
  incidentDate: string;
  storeFileName: string;
  mainText: string;
}
