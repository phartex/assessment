import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';
import { DataService } from 'src/app/services/data.service';
import { loadCharacter, loadEpisode, loadLocation } from 'src/app/state/assessment.actions';
import { CounterState } from 'src/app/state/assessment.reducer';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  allEpisodes: any;
  constructor(private store: Store<{ count: CounterState }>,
    private characterService: CharacterService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadEpisode());
    this.dataService.locationDetails.subscribe((res) => {
      console.log('component', res);
      this.allEpisodes = res;

    });
  }

}
