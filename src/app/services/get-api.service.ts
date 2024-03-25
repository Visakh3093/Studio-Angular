import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetApiService {
  
  loader:boolean = false
  object = new BehaviorSubject(this.loader)
  constructor(private http: HttpClient) { }

  public getData(url: string):any {
   return this.http.get(url)
  }

  postData(url:string,data:any)
  {
    return this.http.post(url,data)
  }    

  loaderOn()
  {

    this.object.next(this.loader=true)
      
      
  }

  loaderOff()
  {
      this.loader = false
      this.object.next(this.loader=false)
      
      
  }

}
