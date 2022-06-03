import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { CharactersComponent } from './views/characters/characters.component';
import { LocationsComponent } from './views/locations/locations.component';
import { EpisodesComponent } from './views/episodes/episodes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './shared/share.module';
import { CustomMaterialModule } from './shared/custom-material/custom-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';


import { HttpClientModule } from '@angular/common/http';
import { characterReducer } from './state/assessment.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AssessmentEffects } from './state/character.effects';
import { ViewDetailsComponent } from './views/modals/view-details/view-details.component';
import { ViewEpisodesComponent } from './views/modals/view-details/view-episodes/view-episodes.component';
import { ViewLocationsComponent } from './views/modals/view-details/view-locations/view-locations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent,
    ViewDetailsComponent,
    ViewEpisodesComponent,
    ViewLocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
    CustomMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([AssessmentEffects]),
    StoreModule.forRoot({count : characterReducer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
