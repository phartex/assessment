import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";

import { CharacterService } from "../services/character.service";
import { DataService } from "../services/data.service";
import { loadCharacter } from "./assessment.actions";


@Injectable()
export class  AssessmentEffects{
    constructor(private actions$: Actions, private characterService : CharacterService,private dataService:DataService){}
    
    loadCharacters$ = createEffect(() =>{
        return this.actions$.pipe(ofType(loadCharacter), mergeMap((action) => {
            return this.characterService.getCharacters().pipe(map(data =>{
               this.dataService.getCharacterDetails(data.results);
               console.log('hshshssh',data.results)
            }))
        }))
    }, {dispatch: false})
}