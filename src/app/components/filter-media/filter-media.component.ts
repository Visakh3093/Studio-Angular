import { Component, OnInit} from '@angular/core';
import { GetApiService } from '../../services/get-api.service';
import { environment } from '../../../environments/environment';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PagetitleComponent } from '../pagetitle/pagetitle.component';
import { LowerImgComponent } from '../lower-img/lower-img.component';
import { BehaviorSubject } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { FilterDataModel, Pager, ResultantModel, ValueModel } from '../../model/mediacenter.interface';

@Component({
  selector: 'app-filter-media',
  standalone: true,
  imports: [PagetitleComponent,LowerImgComponent,RouterLink,NgxPaginationModule,CommonModule],
  templateUrl: './filter-media.component.html',
  // styleUrl: './filter-media.component.scss'
})
export class FilterMediaComponent implements OnInit {

  title:string = "Media Center"
  filterUrl = `${environment.apiUrl}/api/filter/en?_format=json`
  filterData:FilterDataModel[] =[]
  resData:ResultantModel["results"] = []
  pager:Partial<Pager> ={}
  url:string = `${environment.apiUrl}/api/filtermedia-centre/`
  paginationUrl:string = `${environment.apiUrl}/api/media-centre?_format=json&page=`
  id:string ="4"
  loadingPage:number=0
  currentPage:number =0
  value:number= 0
  object = new BehaviorSubject(this.id)
  object2 = new BehaviorSubject(this.currentPage)


   constructor(private data: GetApiService, private route:ActivatedRoute){}
  
   
   ngOnInit(): void {
     
     this.route.params.subscribe((value:Partial<ValueModel>)=>{
      
       this.id = value.id ?? "4"
       this.object.next(this.id);
   })

     this.object.subscribe((res:string)=>{
     
      this.data.getData(this.url+res+'?_format=json').subscribe((res:ResultantModel)=>{
       
                this.resData = res.results                                           
                this.pager = res.pager
       })

     })
       
       this.data.getData(this.filterUrl).subscribe((res:FilterDataModel[])=>{
              this.filterData = res
       })
   }

   
pageUpdate(value:number)
{
  
  this.object2.next(value)
   this.currentPage = value-1
   this.value = value-1
   this.object2.subscribe((res:number)=>{

    this.data.getData(this.paginationUrl+this.value).subscribe((res:ResultantModel)=>{
         this.resData = res.results   
         this.pager = res.pager                 
    }, (err:Error)=>{
      
      
    })
   })
   
}



}
