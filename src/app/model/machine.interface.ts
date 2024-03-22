interface Result {
    title: string;
    body: boolean | string;
    field_machine_brand: string;
    field_machines_brief: boolean | string;
    field_machine_features: boolean | string;
    field_machines_usage_time: boolean | string;
    field_machine_materials: boolean | string;
    field_machine_safety_procedure: boolean | string;
    field_machine_type: boolean | string;
    nid: string;
    field_machines_image_1: string;
    field_machine_cover_image_1: string;
    field_is_software_required_: string;
    field_software_name: string;
    field_sub_title: string;
  }
  interface Pager {
    count: string;
    pages: number;
    items_per_page: number;
    current_page: number;
  }
 export interface MachineModel {
    results: Result[];
    pager: Pager;
  }

  export interface ParamsModel {
    id: string;
  }

  export interface MachineDataModel {
    title: string;
    body: string;
    field_machine_brand: string;
    field_machines_brief: string;
    field_machine_cover_image: string;
    field_machine_features: string;
    field_machines_image: string;
    field_machines_usage_time: string;
    field_machine_materials: string;
    field_machine_safety_procedure: string;
    field_machine_type: string;
    nid: string;
    field_is_software_required_: string;
    field_software_name: string;
    field_sub_title: string;
  }