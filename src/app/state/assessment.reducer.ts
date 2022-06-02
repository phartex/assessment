import { createReducer, on } from '@ngrx/store';
import {loadCharacter, loadEpisode, loadLocation} from './assessment.actions';

export const initialState : any = 0

export const characterReducer = createReducer(
    initialState,
    on(loadCharacter, (state) => state + 1),
  );