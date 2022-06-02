import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iassessment } from '../state/assessment.state';


const httpOptions = {
  headers: new HttpHeaders().set("Content-Type", "application/json"),
};

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(public http : HttpClient) { }

  getCharacters():Observable<Iassessment>{

    let path = 'https://rickandmortyapi.com/api/character'

    return this.http.get<Iassessment>(path, httpOptions)
  }
  
}
