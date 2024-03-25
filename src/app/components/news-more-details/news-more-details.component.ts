import { Component, Input } from '@angular/core';
import { PagetitleComponent } from '../pagetitle/pagetitle.component';
import { RouterLink } from '@angular/router';
import { LowerImgComponent } from '../lower-img/lower-img.component';
import { ImageArrayModel, ResultModel } from '../../model/mediacenter.interface';

@Component({
  selector: 'app-news-more-details',
  standalone: true,
  imports: [PagetitleComponent,RouterLink,LowerImgComponent],
  templateUrl: './news-more-details.component.html',
  // styleUrl: './news-more-details.component.scss'
})
export class NewsMoreDetailsComponent {
  title:string = 'News'
  @Input () Data:Partial<ResultModel> = new Object() as ResultModel
  @Input () imgData:ImageArrayModel[] = new Array<ImageArrayModel>()
  constructor(){}         

}
