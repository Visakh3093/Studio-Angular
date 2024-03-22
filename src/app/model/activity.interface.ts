export interface dataToSendModel {
    lang:string,
    title?:string,
    field_activity_category_target_id?:string,
    field_start_and_end_time_value?:string
}

export interface Pager {
    count: number;
    pages: number;
    items_per_page: number;
    current_page: number;
  }
 export interface Result {
    date_count: number;
    counter: number;
    nid: string;
    langcode: string;
    title: string;
    body: string;
    field_event_type: string;
    field_need_to_show_enroll_button: string;
    field_waiting_list_count: string;
    field_number_of_attendees: string;
    field_need_volenteer: string;
    field_gender: string;
    field_activity_category?: any;
    field_activity_category_1: string;
    field_activity_thumbnail: string;
    field_activity_zone: string;
    activity_gender: string;
    field_age_group: string;
    field_start_and_end_time_3: string;
    field_start_and_end_time_4: string;
    field_start_and_end_time_2: string;
    field_start_and_end_time: string;
    field_start_and_end_time_1: string;
    waitinglist_counter: number;
    enrollment_count: number | string;
    link: string;
  }
  export interface Activities {
    pager: Pager | undefined
    results: Result[] | undefined
  }


  export interface ValuedModel {
    page: number;
    lang: string;
  }

  export interface Params {
    id: string;
  }

  export interface ActivityDetailsModel {
    eventname: string;
    description?:string;
    details: string;
    startdate: string;
    enddate: string;
    langcode: string;
    age_group: string;
    gender: string;
    field_number_of_attendees: string;
    field_class_room: string;
    field_trainer_name: string;
    field_session_category: string;
    field_materials: string;
    latitude: string;
    longitude: string;
    field_activity_zone: string;
    field_google_map: string;
    type_1: string;
    nothing: string;
    field_start_and_end_time: string;
    field_start_and_end_time_1: string;
    field_start_and_end_time_2: string;
    field_activity_address: string;
    field_start_and_end_time_3: string;
    field_start_and_end_time_4: string;
    field_need_to_show_enroll_button: string;
    field_waiting_list_count: string;
    attendees: string;
    field_start_and_end_time_5: string;
    field_start_and_end_time_6: string;
    field_event_type: string;
    status: string;
    field_activity_objective: string;
  }

  export  interface ActivityImageModel {
    'media-gallery': string[];
  }