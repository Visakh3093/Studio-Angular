import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetApiService } from '../../services/get-api.service';
import { environment } from '../../../environments/environment';
import { GalleryMoreDetailsComponent } from '../gallery-more-details/gallery-more-details.component';
import { NewsMoreDetailsComponent } from '../news-more-details/news-more-details.component';
import { ArticleMoreDetailsComponent } from '../article-more-details/article-more-details.component';
import { VideoMoreDetailsComponent } from '../video-more-details/video-more-details.component';
import { Params } from '../../model/activity.interface';
import { ImageArrayModel, MediacenterImage, ResultModel } from '../../model/mediacenter.interface';


@Component({
  selector: 'app-media-details',
  standalone: true,
  imports: [GalleryMoreDetailsComponent,NewsMoreDetailsComponent,ArticleMoreDetailsComponent,VideoMoreDetailsComponent],
  templateUrl: './media-details.component.html',
  styleUrl: './media-details.component.scss'
})
export class MediaDetailsComponent implements OnInit {
  paramsId:string =""
  resData:Partial<ResultModel> = {}
  url:string = `${environment.apiUrl}/api/media-details/`
  imageUrl:string = `${environment.apiUrl}/api/media-detail-gallery/`
  imageData:ImageArrayModel[] = new Array<ImageArrayModel>()
  constructor(private route:ActivatedRoute,private data:GetApiService){
      this.route.params.subscribe((params:Partial<Params>)=>{
             this.paramsId = params.id ?? ''
      })
  }

  ngOnInit(): void {
    this.data.getData(this.url+this.paramsId+`?_format=json`).subscribe((res:ResultModel[])=>{
   
      this.resData = res[0]  
      
    })
    this.data.getData(this.imageUrl+this.paramsId+`?_format=json`).subscribe((res:MediacenterImage)=>{
     this.imageData = res["media-gallery"] 
        
    })
  }




}
