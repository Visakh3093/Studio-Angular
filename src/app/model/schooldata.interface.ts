export interface schoolData {
    sname:string,
    id:string,
    field_school_email:string,
    field_s:string
}

export interface schoolInputData {
    label:string,
    key:string,
    type:string,
    placeholder:string,
    required:boolean,
    refKey?:string,
    refValue?:string,
    options?:any

}


interface Uid {
    value: number;
  }
  interface Uuid {
    value: string;
  }
  interface Status {
    value: boolean;
  }
  interface Created {
    value: string;
    format: string;
  }
  interface Role {
    target_id: string;
    target_type: string;
    target_uuid: string;
  }
  interface Fieldschool {
    target_id: number;
    target_type: string;
    target_uuid: string;
    url: string;
  }
  export interface SchoolResModel {
    uid: Uid[];
    uuid: Uuid[];
    langcode: Uuid[];
    preferred_langcode: Uuid[];
    preferred_admin_langcode: any[];
    name: Uuid[];
    mail: Uuid[];
    timezone: any[];
    status: Status[];
    created: Created[];
    changed: Created[];
    access: Created[];
    login: Created[];
    init: any[];
    roles: Role[];
    default_langcode: Status[];
    field_access_tocken: Uuid[];
    field_activity_point: any[];
    field_channels_of_communication: any[];
    field_gender: any[];
    field_grade: any[];
    field_is_verified: Status[];
    field_nationality: any[];
    field_new_school_name: Uuid[];
    field_other_school_selector: any[];
    field_parent_email: any[];
    field_parent_mobile_number: any[];
    field_parent_mobile_number_2: any[];
    field_parent_name: any[];
    field_parent_name_arabic: any[];
    field_parent_qid: any[];
    field_parent_qid_ref: any[];
    field_password_reset_date: any[];
    field_point_level: any[];
    field_qid: any[];
    field_reference: any[];
    field_relation_to_the_student: any[];
    field_representative_name_arabic: any[];
    field_rep_email_address: Uuid[];
    field_rep_mobile_number_: Uuid[];
    field_rep_name: Uuid[];
    field_rep_position: Uuid[];
    field_school: Fieldschool[];
    field_school_email: Uuid[];
    field_school_mobile_number: Uuid[];
    field_school_name: any[];
    field_school_reps_qid: Uuid[];
    field_school_rep_status: Uuid[];
    field_student_dob: any[];
    field_student_email: any[];
    field_student_mobile: any[];
    field_student_name: any[];
    field_student_name_arabic: any[];
    field_trainer_assistant_name: any[];
    field_varification_code: any[];
    field_volenteer_email: any[];
    field_volenteer_mobile: any[];
    field_volenteer_name: any[];
    field_volenteer_name_arabic: any[];
    field_volenteer_qid: any[];
    field_workshop_text: any[];
    user_picture: any[];
  }
