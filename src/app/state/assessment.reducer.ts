import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { loadCharacter } from "./assessment.actions";
import { characterState } from "./assessment.state";

const _characterReducer = createReducer(characterState,on(loadCharacter,(state)=>{
    return {
        ...state,
        counter: state.counter + 1
    }
}))


export function characterReducer(state : any, action : any){
        return _characterReducer(state, action)
    }