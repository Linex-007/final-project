import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ResortsComponent } from './pages/resorts/resorts.component';
import { AttractionsComponent } from './pages/attractions/attractions.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'resorts',component:ResortsComponent},
    {path:'attractions',component:AttractionsComponent}
];
