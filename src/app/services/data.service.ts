import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private characterDetailsSource$ = new BehaviorSubject<object>({});
  public  characterDetails= this.characterDetailsSource$.asObservable();

  private locationDetailsSource$ = new BehaviorSubject<object>({});
  public  locationDetails= this.locationDetailsSource$.asObservable();

  private episodeDetailsSource$ = new BehaviorSubject<object>({});
  public  episodeDetails= this.episodeDetailsSource$.asObservable();


  constructor() { }

  getCharacterDetails(characterDetails: any){    
    this.characterDetailsSource$.next(characterDetails);
  };

  getlocationDetails(locationDetails: any){    
    this.locationDetailsSource$.next(locationDetails);
  }

  getEpisodeDetails(episodeDetails: any){    
    this.episodeDetailsSource$.next(episodeDetails);
  }

}
