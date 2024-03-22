import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../../services/get-api.service';
import { environment } from '../../../environments/environment';
import { ZoneModel } from '../../model/home.interface';

@Component({
  selector: 'app-zone',
  standalone: true,
  imports: [],
  templateUrl: './zone.component.html',
  styleUrl: './zone.component.scss'
})
export class ZoneComponent implements OnInit {
  url:string = `${environment.apiUrl}/api/zones?_format=json`
  zone:ZoneModel[] = []
  constructor(private data:GetApiService){}

  ngOnInit(): void {
      this.data.loaderOn()
      this.data.getData(this.url).subscribe((res:ZoneModel[])=>{
            this.zone = res
            this.data.loaderOff()
      },(err:Error)=>{
        this.data.loaderOff()
      })
  }

}
