import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { GetApiService } from './services/get-api.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,FooterComponent,LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  loaderValue:boolean = false
  object = new BehaviorSubject(this.loaderValue)
  constructor(private apiservice:GetApiService){}

 ngOnInit(): void {
   this.loaderValue= this.apiservice.loader
   this.object.next(this.apiservice.loader)
 }

 
}
