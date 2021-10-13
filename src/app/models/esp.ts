export interface IField {
  key: string;
  value: any;
  text: string;
}

export interface IEspField extends IField {
  required: boolean;
  values?: ITypeText[];
}

export interface IEspData extends ITypeText {
  fields: IEspField[];
  optionalFields: IField[];
}
export interface ITypeText {
  type: string;
  text: string;
}


