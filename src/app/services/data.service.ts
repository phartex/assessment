import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private characterDetailsSource$ = new BehaviorSubject<object>({});
  public  characterDetails= this.characterDetailsSource$.asObservable();


  constructor() { }

  getCharacterDetails(characterDetails: any){    
    this.characterDetailsSource$.next(characterDetails);
  }

}
