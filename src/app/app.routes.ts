import { Routes } from '@angular/router';
import { HomeComponent } from './wedding-module/home/home.component';
import { DatesComponent } from './wedding-module/dates/dates.component';
import { PicturesComponent } from './wedding-module/pictures/pictures.component';
import { VenueComponent } from './wedding-module/venue/venue.component';
import { VideosComponent } from './wedding-module/videos/videos.component';
import { FoodComponent } from './wedding-module/food/food.component';
import { PagenotfoundComponent } from './wedding-module/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {'path': '', title: 'Home', component:HomeComponent},
    {'path': 'date', title: 'Date', component:DatesComponent},
    {'path': 'venue', title: 'Venue', component:VenueComponent},
    {'path': 'pics', title: 'Pics', component:PicturesComponent},
    {'path': 'videos', title: 'Videos', component:VideosComponent},
    {'path': 'food', title: 'Food', component:FoodComponent},
    {'path': '**', title: 'Page Not Found', component:PagenotfoundComponent},
];