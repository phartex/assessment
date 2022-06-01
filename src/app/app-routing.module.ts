import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './views/characters/characters.component';
import { EpisodesComponent } from './views/episodes/episodes.component';
import { HomeComponent } from './views/home/home.component';
import { LocationsComponent } from './views/locations/locations.component';

const routes: Routes = [
  
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "characters",
    component: CharactersComponent
  },
  {
    path: "episodes",
    component: EpisodesComponent
  },
  {
    path: "locations",
    component: LocationsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
