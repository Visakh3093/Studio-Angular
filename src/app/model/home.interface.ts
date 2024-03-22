export interface AppsliderModel {
    body: string;
    video: string;
    field_media: string;
}

export interface AboutHomeModel {
    body: string;
}

export interface ZoneModel {
    zonenames: string;
    zonesdescription: string;
    zoneimage: string;
}

export interface Result {
    title: string;
    type: string;
    langcode: string;
    field_start_end_dates: string;
    nid: string;
    field_start_end_dates_1: string;
    field_need_volenteer: string;
    field_compatition_type: string;
    nothing: string;
    field_activity_thumbnail: string;
    field_activity_category: string;
    field_age_group: string;
    body: string;
    field_gender: string;
    field_zone: string;
    field_activity_zone: string;
    field_start_and_end_time: string;
    field_start_and_end_time_1: string;
    field_start_and_end_time_2: string;
    field_start_and_end_time_3: string;
    field_start_and_end_time_4: string;
    field_need_to_show_enroll_button: string;
    field_number_of_attendees: string;
    field_waiting_list_count: string;
}
export interface Pager {
    count: number;
    pages: number;
    items_per_page: number;
    current_page?: number;
}
export interface ActivityHomeModel {
    results: Result[];
    pager: Pager;
}

export interface articleDataModel {
    title?: string;
    category?: string;
    description?: string;
    date?: string;
    image?: string;
    nid?: string;
    field_key?: string;
    field_newsimage?: string;
}

export interface VideoModel {
    category?: string;
    description?: string;
    langcode?: string;
    date?: string;
    nid?: string;
    video?: string;
    title?: string;
    field_key?: string;
}

export interface GalleryModel {
    category?: string;
    description?: string;
    langcode?: string;
    date?: string;
    image?: string;
    nid?: string;
    title?: string;
    field_key?: string;
  }

  export interface SubscriberesponseModel {
    sid: string;
  }