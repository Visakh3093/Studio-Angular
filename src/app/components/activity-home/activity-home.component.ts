import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GetApiService } from '../../services/get-api.service';
import { RouterLink } from '@angular/router';
import { ActivityHomeModel,Result } from '../../model/home.interface';

@Component({
  selector: 'app-activity-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './activity-home.component.html',
  // styleUrl: './activity-home.component.scss'
})
export class ActivityHomeComponent implements OnInit{

  url:string=`${environment.apiUrl}/api/featured_activities`
  response:Result[] = []
  currentDate:Date = new Date()
 
  constructor(private data:GetApiService){}
   
  ngOnInit(): void {
    this.data.loaderOn()
    this.data.getData(this.url).subscribe((res:ActivityHomeModel)=>{
      this.response = res.results
      
      this.data.loaderOff()      
    },(err:Error)=>{
      this.data.loaderOff()
  })
  }

  dateFormatter (value:string) {
    return new Date(value)
  }


}
