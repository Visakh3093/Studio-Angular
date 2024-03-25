import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../../services/get-api.service';
import { environment } from '../../../environments/environment';
import { AboutHomeModel } from '../../model/home.interface';


@Component({
  selector: 'app-abouthome',
  standalone: true,
  imports: [],
  templateUrl: './abouthome.component.html',
  // styleUrl: './abouthome.component.scss'
})
export class AbouthomeComponent implements OnInit {
  url: string = `${environment.apiUrl}/api/about?_format=json`
  body:string=''
  constructor(private data: GetApiService) { }

  ngOnInit(): void {
    this.data.loaderOn()
    this.data.getData(this.url).subscribe((res: AboutHomeModel[]) => {
      this.body = res[0].body
    },(err:Error)=>{
      this.data.loaderOff()
    })
  }
}
