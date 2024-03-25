import { Component, Inject, OnInit,PLATFORM_ID,inject } from '@angular/core';
import { PagetitleComponent } from '../pagetitle/pagetitle.component';
import { LowerImgComponent } from '../lower-img/lower-img.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GuardianComponent } from '../guardian/guardian.component';
import { VolunteerComponent } from '../volunteer/volunteer.component';
import { StudentComponent } from '../student/student.component';
import { SchoolComponent } from '../school/school.component';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [PagetitleComponent,LowerImgComponent,RouterLink,RouterLinkActive,GuardianComponent,VolunteerComponent,StudentComponent,SchoolComponent],
  templateUrl: './registration.component.html',
  // styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit {
  
  title = "Register";
  subTitle: string = ""
  constructor(@Inject(PLATFORM_ID) private platformId: Object){
    
  }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId))
    {
      this.subTitle =  localStorage.getItem("subname") ?? '';
    }

  } 
  handleClear()
  {
    localStorage.clear()
    this.subTitle = ''
  }

 
  

  changeSubtitle(subTitle: string): void {
    this.subTitle = subTitle;
    localStorage.setItem("subname", subTitle);
  }
}
