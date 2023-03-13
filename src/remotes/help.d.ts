interface IGetHelpData {
  data: IGetHelpDataItem[];
}

export interface IGetHelpDataItem {
  number: string;
  summary: string;
  countryName: string;
}
