

export interface InputData {
    type: string;  
    label: string;
    key: string;
    placeholder: string;
    required:boolean
}

export interface FormDataModel {
    name: string;
    email: string;
    mobile_number: string;
    message: string;
    agree: boolean;
    webform_id: string;
  }


 export interface ContactResponseModel {
    sid: string;
  }