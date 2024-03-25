import { Component, OnInit } from '@angular/core';
import { PagetitleComponent } from '../../components/pagetitle/pagetitle.component';
import { RouterLink } from '@angular/router';
import { GetApiService } from '../../services/get-api.service';
import { environment } from '../../../environments/environment';
import { EquipmentModel } from "../../model/equipment.interface"

@Component({
  selector: 'app-equipment-used',
  standalone: true,
  imports: [PagetitleComponent,RouterLink],
  templateUrl: './equipment-used.component.html',
})
export class EquipmentUsedComponent implements OnInit {
 title="Equipment"
 resData:EquipmentModel["results"] =[]
 url:string = `${environment.apiUrl}/api/get_equipment_used?page=0`
 constructor(private data:GetApiService){}

 ngOnInit(): void {
   this.data.getData(this.url).subscribe((res:EquipmentModel)=>{
      this.resData = res.results
   })  
 }
}
