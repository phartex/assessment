import { createAction, props } from "@ngrx/store";
import { Iassessment } from "./assessment.state";

export const loadCharacter = createAction('[loadCharacter] loadup character');
export const loadLocation = createAction('[loadLocation] loadup Location')
export const loadEpisode = createAction('[loadEpisode] loadup Episode');
export const loadCharacterSuccess = createAction('[load character success',props<{counter : Iassessment}>())

// export const changeSearch = createAction('changeSearch');

