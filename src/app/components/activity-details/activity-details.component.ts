import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../../services/get-api.service';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { PagetitleComponent } from '../pagetitle/pagetitle.component';
import { LowerImgComponent } from '../lower-img/lower-img.component';
import { ActivityDetailsModel, ActivityImageModel } from '../../model/activity.interface';

@Component({
  selector: 'app-activity-details',
  standalone: true,
  imports: [PagetitleComponent, LowerImgComponent, RouterLink],
  templateUrl: './activity-details.component.html',
  // styleUrl: './activity-details.component.scss'
})
export class ActivityDetailsComponent implements OnInit {
  paramsId: number = 0
  title: string = 'Workshop Details'

  dateArray_1: string[] = []
  dateArray_2: string[] = []
  url: string = `${environment.apiUrl}/api/activity-details/`
  imgUrl: string = `${environment.apiUrl}/api/activity-detail-gallery/`
  results: Partial<ActivityDetailsModel> = {}
  imgData: string[] =[]
  constructor(private data: GetApiService, private route: ActivatedRoute) {
    route.params.subscribe((params: Params) => {
      
      
      this.paramsId = params['id']
      
    })
  }



  ngOnInit(): void {
    this.data.getData(this.url + this.paramsId + '?_format=json').subscribe((res: ActivityDetailsModel[]) => {
      this.results = res[0];

      const time_key_1 = "field_start_and_end_time";
      const time_key_2 = "field_start_and_end_time_1";
      const date_key_1 = "field_start_and_end_time_3";
      const date_key_2 = "field_start_and_end_time_4";

      const time_str_1 = this.results[time_key_1] || "";
      const time_str_2 = this.results[time_key_2] || "";

      const date_str_1 = this.results[date_key_1] || "";
      const date_str_2 = this.results[date_key_2] || "";

      const time_array_1 = time_str_1.split('*');
      const time_array_2 = time_str_2.split('*');

      const date_array_1 = date_str_1.split('*');
      const date_array_2 = date_str_2.split('*');
     
    
      

      const combined_array_1 = date_array_1.map((date: string, index: number) => `${date} - ${time_array_1[index]}`);
      const combined_array_2 = date_array_2.map((date: string, index: number) => `${date} - ${time_array_2[index]}`);

      this.dateArray_1 = combined_array_1;
      this.dateArray_2 = combined_array_2;




    })

    this.data.getData(this.imgUrl + this.paramsId + '?_format=json').subscribe(
       (res: ActivityImageModel) => {
          this.imgData = res["media-gallery"]

        },  (err: Error) => {
          console.log("Path: ", this.imgUrl + this.paramsId + '?_format=json');
          console.log("Error: ", err);
        }
      )
  }



}
