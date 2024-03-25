import { Component, Input, OnInit, Output } from '@angular/core';
import { PagetitleComponent } from '../../components/pagetitle/pagetitle.component';
import { LowerImgComponent } from '../../components/lower-img/lower-img.component';
import { RouterLink } from '@angular/router';
import { GetApiService } from '../../services/get-api.service';
import { environment } from '../../../environments/environment';
import { FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {Activities, ValuedModel, dataToSendModel} from '../../model/activity.interface'
import { format } from 'date-fns'
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [PagetitleComponent,LowerImgComponent,RouterLink,ReactiveFormsModule,NgxPaginationModule,CommonModule],
  templateUrl: './activities.component.html',
  // styleUrl: './activities.component.scss'
})
export class ActivitiesComponent implements OnInit {

  titlePage:string = 'Activities'
  url:string = `${environment.apiUrl}/api/activicties?_format=json`
  postUrl:string = `${environment.apiUrl}/api/activicties?_format=json`
  
  tokenUrl:string = `${environment.apiUrl}/session/token`
  value:ValuedModel = { page:0,
  lang:"en"}
  pager:Activities["pager"]
  results:Activities["results"]
  currentDate:Date = new Date()
  updatedData:dataToSendModel = new Object() as dataToSendModel
  constructor(private data:GetApiService){}
  currentPage:number = 0
  object = new BehaviorSubject(this.currentPage)
  dateSplit(value:string)
  {
    return value.split("*")[0]
  }

  dateFormatter(value:string)
  {
    return new Date(value)
  }



   ngOnInit(): void {
     this.data.postData(this.url,this.value).subscribe((res:Partial<Activities>)=>{
       
        this.results = res.results
        this.pager = res.pager
        this.currentPage = this.pager?.current_page ?? 0
       
     },
    (err:Error)=>{
     
       
    })
   }
   
   formData = new FormGroup({
    field_activity_category_target_id: new FormControl(""),
    field_start_and_end_time_value:new FormControl(""),
    lang:new FormControl("en"),
    title: new FormControl("")

   })

   onSubmit() {
    
    if (this.formData.value.title) {
      this.updatedData.title = this.formData.value.title;
    }
    if(this.formData.value.field_activity_category_target_id !== undefined &&this.formData.value.field_activity_category_target_id !=='' )
    {
      this.updatedData.field_activity_category_target_id = this.formData.value.field_activity_category_target_id ?? ''
    }

    if(this.formData.value.field_start_and_end_time_value)
    {
       this.updatedData.field_start_and_end_time_value = format(this.formData.value.field_start_and_end_time_value,"yyyy-MM-dd")
    }


    
    this.data.postData(this.postUrl,this.updatedData).subscribe(
       (res: Partial<Activities>) => {
        
        this.results = res.results
        

      },
       (err: Error) => {

      
    });
  }

  pageUpdate(value:number)
  {
   
    this.object.next(value)
     this.currentPage = value-1
     this.value.page = value-1
     this.object.subscribe((res:number)=>{      
      this.data.postData(this.url,this.value).subscribe((res:Partial<Activities>)=>{
           this.results = res.results          
           
      })
     })
     
  }

}
