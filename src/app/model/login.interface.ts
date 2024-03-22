export interface FormData {
    email: string;
    password: string;
  }

export interface inputField {
    label: string;
    type: string;
    key: string;
    placeholder: string;
    required: boolean;
    options?:RadioOption[]
  }

  export interface RadioOption {
    value: string;
    label: string;
  }

  interface Error {
    en: string;
    ar: string;
  }
 export interface ForgottPasswordModel {
    success: boolean;
    status: number;
    error: Error;
  }
  
