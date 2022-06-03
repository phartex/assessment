import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';
import { DataService } from 'src/app/services/data.service';
import { loadCharacter } from 'src/app/state/assessment.actions';
import { CounterState } from 'src/app/state/assessment.reducer';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  // characters$: Observable<number>
  allCharacters: any;
  constructor(private store: Store<{ count: CounterState }>,
     private characterService: CharacterService, private dataService : DataService) {


  }

  ngOnInit(): void {
    this.store.dispatch(loadCharacter());
    this.dataService.characterDetails.subscribe((res)=>{
      console.log('component',res);
      this.allCharacters = res;
      
    })


  }

  onAdd() {
   
  }

}
