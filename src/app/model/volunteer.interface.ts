export interface volunteerModel {
    label: string;
    key: string;
    type: string;
    required: boolean;
    placeholder?: string;
    option?:any;
   
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
    target_id?: any;
  }
  export interface VolunteerResModel {
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
    field_gender: Uuid[];
    field_grade: Uuid[];
    field_is_verified: Status[];
    field_nationality: Uuid[];
    field_new_school_name: Uuid[];
    field_other_school_selector: Uuid[];
    field_parent_email: Uuid[];
    field_parent_mobile_number: Uuid[];
    field_parent_mobile_number_2: Uuid[];
    field_parent_name: Uuid[];
    field_parent_name_arabic: any[];
    field_parent_qid: any[];
    field_parent_qid_ref: Uuid[];
    field_password_reset_date: any[];
    field_point_level: any[];
    field_qid: Uuid[];
    field_reference: any[];
    field_relation_to_the_student: Uuid[];
    field_representative_name_arabic: any[];
    field_rep_email_address: any[];
    field_rep_mobile_number_: any[];
    field_rep_name: any[];
    field_rep_position: any[];
    field_school: Fieldschool[];
    field_school_email: any[];
    field_school_mobile_number: any[];
    field_school_name: any[];
    field_school_reps_qid: any[];
    field_school_rep_status: any[];
    field_student_dob: Uuid[];
    field_student_email: Uuid[];
    field_student_mobile: Uuid[];
    field_student_name: Uuid[];
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