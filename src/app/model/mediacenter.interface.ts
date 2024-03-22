export interface FilterDataModel {
    filter: string;
    tid: string;
    count: string;
  }

  export interface Result {
    title: string;
    category: string;
    description: string;
    media: string;
    nid: string;
    date: string;
    video: string;
    field_video_caption: string;
    field_key: string;
    field_newsimage: string;
  }
 export interface Pager {
    count: string;
    pages: number;
    items_per_page: number;
    current_page: number;
  }
 export interface ResultantModel {
    results: Result[];
    pager: Pager;
  }

  export interface Params {
    id: string;
  }
  export interface ResultModel {
    title: string;
    category: string;
    description: string;
    media: string;
    langcode: string;
    date: string;
    video: string;
    field_key: string;
    field_description: string;
    field_video_caption: string;
  }
  export  interface MediacenterImage {
    'media-gallery': ImageArrayModel[];
  }

  export interface ValueModel {
    id: string;
  }

export interface ImageArrayModel {
  image: string;
  caption?: string;
}