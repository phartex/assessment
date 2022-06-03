import { createReducer, on } from '@ngrx/store';
import { loadCharacter, loadEpisode, loadLocation } from './assessment.actions';


export interface CounterState {
  counter: {
    name: string,
    amount: number
  };
  
}


export const initialState: CounterState = {
  counter: {
    name: 'tobi',
    amount: 23
  },
};


export const characterReducer = createReducer(
  initialState,
  on(loadCharacter, (state) => {
    return {
      ...state,
    };
  }),
  on(loadLocation,(state) => {
    return {
      ...state,
    };
  })
);

