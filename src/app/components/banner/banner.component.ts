import { Component, OnInit } from '@angular/core';
import { GetApiService } from '../../services/get-api.service';
import { environment } from '../../../environments/environment';
import { AppsliderModel } from '../../model/home.interface'

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  // styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {
    banner:string = ''
    contact:string = ''
    startIndex:number=0;
  exactPath:string ='' 
    url:string =`${environment.apiUrl}/api/banner?_format=json`
    constructor(private _getApiServices:GetApiService){ }



    ngOnInit(): void {
        this._getApiServices.loaderOn()
        this._getApiServices.getData(this.url).subscribe((res:AppsliderModel[])=>{
          
          
          this.banner = res[0]?.video
          this.contact = res[0]?.body
          if(this.banner !=='')
          {
           this.startIndex = this.banner.indexOf('/sites')
           this.exactPath =  this.banner.substring(this.startIndex)         
          }
        this._getApiServices.loaderOff()
        },(err:Error)=>{
          this._getApiServices.loaderOff()
        })
            
        
    }


    


}
