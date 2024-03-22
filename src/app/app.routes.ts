import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { MediaCenterComponent } from './pages/media-center/media-center.component';
import { MachinesComponent } from './pages/machines/machines.component';
import { EquipmentUsedComponent } from './pages/equipment-used/equipment-used.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FilterMediaComponent } from './components/filter-media/filter-media.component';
import { MachineDetailsComponent } from './components/machine-details/machine-details.component';
import { MediaDetailsComponent } from './components/media-details/media-details.component';
import { ActivityDetailsComponent } from './components/activity-details/activity-details.component';
import { ForgottpasswordComponent } from './components/forgottpassword/forgottpassword.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { StudentComponent } from './components/student/student.component'
import { SchoolComponent } from './components/school/school.component'
import { VolunteerComponent } from './components/volunteer/volunteer.component'
import { GuardianComponent } from './components/guardian/guardian.component'
import { SubscribeComponent } from "./components/subscribe/subscribe.component"

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'about',component:AboutComponent
    },
    {
        path:'activities',component:ActivitiesComponent
    },
    {
        path:'media-center',component:MediaCenterComponent
    },
    {
        path:'machines',component:MachinesComponent
    },
    {
        path:'equipment-used',component:EquipmentUsedComponent
    },
    {
        path:'contact',component:ContactComponent
    },
    {
        path:'login',component:LoginComponent
    },
    {
        path:'filter-media/:id', component:FilterMediaComponent
    },
    {
        path:'machine-detail/:id', component:MachineDetailsComponent
    },
    {
        path:'news/:id' , component:MediaDetailsComponent
    },
    {
        path:'activity/:id' , component:ActivityDetailsComponent

    },
    {
        path:"forgot-password" , component:ForgottpasswordComponent
    },
    {
        path:"subscribe", component:SubscribeComponent
    },
    { 
        path:"registration" , component:RegistrationComponent, children:[
            {path:"volunteer", component:VolunteerComponent},
            {path:"student", component:StudentComponent},
            {path:"school", component:SchoolComponent},
            {path:"parent", component:GuardianComponent}
        ]
    },
   
    {
        path:'**',component:PageNotFoundComponent
    },
   
];
