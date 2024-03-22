export interface Result {
    title: string;
    body: string;
    field_equipment_image: string;
    nid: string;
    field_equipment_material: string;
    field_is_there_an_update_model_: string;
    field_updated_model: string;
    field_updated_model_website: string;
    field_sub_title: string;
    field_equipment_type: string;
  }
  export interface Pager {
    count: string;
    pages: number;
    items_per_page: number;
    current_page: number;
  }
  export interface EquipmentModel {
    results: Result[];
    pager: Pager;
  }