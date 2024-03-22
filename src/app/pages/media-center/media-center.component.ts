import { Component, OnInit } from '@angular/core';
import { PagetitleComponent } from '../../components/pagetitle/pagetitle.component';
import { LowerImgComponent } from '../../components/lower-img/lower-img.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { environment } from '../../../environments/environment';
import { GetApiService } from '../../services/get-api.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { FilterDataModel, Pager, ResultantModel } from "../../model/mediacenter.interface"

@Component({
  selector: 'app-media-center',
  standalone: true,
  imports: [PagetitleComponent,LowerImgComponent,RouterLink,CommonModule,RouterLinkActive,NgxPaginationModule],
  templateUrl: './media-center.component.html',
  styleUrl: './media-center.component.scss'
})

export class MediaCenterComponent implements OnInit {
  constructor(private data:GetApiService){}
  title:string = 'Media Center'
  filterUrl:string = `${environment.apiUrl}/api/filter/en?_format=json`
  dataUrl:string = `${environment.apiUrl}/api/media-centre?_format=json`
  paginationUrl:string = `${environment.apiUrl}/api/media-centre?_format=json&page=`
  filterData:FilterDataModel[] = [] 
  resData:ResultantModel["results"] =[]
  pager:Partial<Pager> = {}
  loadingPage:number=0
  currentPage:number =0
  value:number= 0
  object = new BehaviorSubject(this.currentPage)

  

ngOnInit(): void {
      this.data.getData(this.filterUrl).subscribe((res:FilterDataModel[])=>{
          this.filterData = res 
         
          
      })

      this.data.getData(this.dataUrl).subscribe((res:ResultantModel)=>{
          this.resData = res.results          
          this.pager = res.pager
          this.currentPage = res.pager.current_page
          
          
      })
      
}

pageUpdate(value:number)
{

  this.object.next(value)
   this.currentPage = value-1
   this.value = value-1
   this.object.subscribe((res:number)=>{
    this.data.getData(this.paginationUrl+this.value).subscribe((res:ResultantModel)=>{
         this.resData = res.results      
       
             
    }, (err:Error)=>{
     
      
    })
   })
   
}
         
 

  

}
