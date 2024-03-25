import { Component, OnInit } from '@angular/core';
import { PagetitleComponent } from '../pagetitle/pagetitle.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '../../../environments/environment';
import { GetApiService } from '../../services/get-api.service';
import { MachineDataModel, ParamsModel } from '../../model/machine.interface';

@Component({
  selector: 'app-machine-details',
  standalone: true,
  imports: [PagetitleComponent,RouterLink],
  templateUrl: './machine-details.component.html',
  // styleUrl: './machine-details.component.scss'
})
export class MachineDetailsComponent implements OnInit {
  title:string = "Machines"
  url:string = `${environment.apiUrl}/machine_details/`
  paramsId:Partial<ParamsModel> ={} 
  machineData:Partial<MachineDataModel> ={}
  decodedId:string = decodeURIComponent("#");
  constructor(private data:GetApiService, private route:ActivatedRoute){
        route.params.subscribe((params)=>{
          
          this.paramsId = params
        })
        
  }

  selectedTab: string = 'feature'; 
  selectTab(tab: string): void {
    this.selectedTab = tab;
  }

  
  ngOnInit(): void {
     
    this.data.getData(this.url+this.paramsId.id).subscribe((res:MachineDataModel[])=>{
      this.machineData = res[0]
    })
      
  }

}










