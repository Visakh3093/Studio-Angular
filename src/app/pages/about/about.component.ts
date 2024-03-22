import { Component, OnInit } from '@angular/core';
import { PagetitleComponent } from '../../components/pagetitle/pagetitle.component';
import { LowerImgComponent } from '../../components/lower-img/lower-img.component';
import { GetApiService } from '../../services/get-api.service';
import { environment } from '../../../environments/environment';
import { AboutModel } from '../../model/about.interface';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [PagetitleComponent,LowerImgComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit  {
       
  response: string = '';
  title: string = "About";
  url: string = `${environment.apiUrl}/api/about_page`;
  
  constructor(private data: GetApiService) {}
  
  ngOnInit(): void {
    this.data.getData(this.url).subscribe((res: AboutModel[]) => {
      this.response = res[0]?.body ?? '';
    });
  
    }
   
  
    
  
  }
