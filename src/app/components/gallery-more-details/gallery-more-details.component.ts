import { Component, Input } from '@angular/core';
import { PagetitleComponent } from '../pagetitle/pagetitle.component';
import { RouterLink } from '@angular/router';
import { LowerImgComponent } from '../lower-img/lower-img.component';
import { ImageArrayModel, ResultModel } from '../../model/mediacenter.interface';

@Component({
  selector: 'app-gallery-more-details',
  standalone: true,
  imports: [PagetitleComponent,RouterLink,LowerImgComponent],
  templateUrl: './gallery-more-details.component.html',
  styleUrl: './gallery-more-details.component.scss'
})
export class GalleryMoreDetailsComponent {
  title:string = 'Gallery'
    @Input () Data:Partial<ResultModel> = new Object as ResultModel
    @Input () imgData:ImageArrayModel[] = new Array()
    constructor(){}

}
