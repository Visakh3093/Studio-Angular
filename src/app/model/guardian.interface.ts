interface Qid {
    ar: string;
    en: string;
  }
  interface Error {
    qid: Qid;
  }
 export interface GuardianModel {
    error: Error;
  }