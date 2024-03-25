import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GetApiService } from '../../services/get-api.service';
import { RouterLink } from '@angular/router';
import { GalleryModel, VideoModel, articleDataModel } from '../../model/home.interface';

@Component({
  selector: 'app-news-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './news-home.component.html',
  // styleUrl: './news-home.component.scss'
})
export class NewsHomeComponent implements OnInit {
  articleUrl: string = `${environment.apiUrl}/api/featured-news-article?_format=json`
  articleData: articleDataModel = {}
  videoUrl: string = `${environment.apiUrl}/api/featured-news-video?_format=json`
  videoData: VideoModel ={}
  galleryUrl: string = `${environment.apiUrl}/api/featured-news-gallery?_format=json`
  galleryData: GalleryModel = {}
  constructor(private data: GetApiService) { }
  ngOnInit(): void {
    this.data.loaderOn()
    this.data.getData(this.articleUrl).subscribe(
       (res: articleDataModel[]) => {
        this.data.loaderOff()
        this.articleData = res[0]
               
      },  (err: Error) => {
        this.data.loaderOff()

      
    })
    this.data.loaderOn()
    this.data.getData(this.videoUrl).subscribe(
       (res: VideoModel[]) => {
        this.data.loaderOff()
        this.videoData = res[0]
      },  (err: Error) => {
        this.data.loaderOff()
      }
    )
    this.data.loaderOn()

    this.data.getData(this.galleryUrl).subscribe(
       (res: GalleryModel[]) => {
        this.data.loaderOff()
        this.galleryData = res[0]
      }, (err: Error) => {
        this.data.loaderOff()
      
    })

  }
}
