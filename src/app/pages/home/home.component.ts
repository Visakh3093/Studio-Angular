import { Component } from '@angular/core';
import { BannerComponent } from '../../components/banner/banner.component';
import { AbouthomeComponent } from '../../components/abouthome/abouthome.component';
import { TopImagesComponent } from '../../components/top-images/top-images.component';
import { ZoneComponent } from '../../components/zone/zone.component';
import { NewsHomeComponent } from '../../components/news-home/news-home.component';
import { ActivityHomeComponent } from '../../components/activity-home/activity-home.component';
import { RegisterWrapComponent } from '../../components/register-wrap/register-wrap.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, AbouthomeComponent, TopImagesComponent, 
            ZoneComponent, ActivityHomeComponent, NewsHomeComponent, 
            RegisterWrapComponent],
  templateUrl: './home.component.html',
  // styleUrl: './home.component.scss'
})
export class HomeComponent {

}
