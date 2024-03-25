import { Component, OnInit } from '@angular/core';
import { PagetitleComponent } from '../../components/pagetitle/pagetitle.component';
import { LowerImgComponent } from '../../components/lower-img/lower-img.component';
import { RouterLink } from '@angular/router';
import { GetApiService } from '../../services/get-api.service';
import { environment } from '../../../environments/environment';
import { MachineModel } from "../../model/machine.interface"

@Component({
  selector: 'app-machines',
  standalone: true,
  imports: [PagetitleComponent,LowerImgComponent,RouterLink],
  templateUrl: './machines.component.html',
})
export class MachinesComponent implements OnInit {
   title:string = 'Machines'
   url:string = `${environment.apiUrl}/api/get_machines?page=0`
   machineData:MachineModel["results"] = [] 
   constructor(private data:GetApiService){}

   ngOnInit(): void {
        this.data.getData(this.url).subscribe((res:MachineModel)=>{
                  
            this.machineData = res.results
        })
   }

}
