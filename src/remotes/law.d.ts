interface IGetLawData {
  data: IGetLawDataItem[];
}

export interface IGetLawDataItem {
  form: string;
  policy: string;
  lawName: string;
  punishments: string[];
  resolutionProcedures: string;
}
