import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';
import { loadCharacter } from 'src/app/state/assessment.actions';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters$: Observable<number>
  constructor(private store : Store<{ count: number }>, private characterService: CharacterService) { 
    this.characters$ = store.select('count');
    
  }

  ngOnInit(): void {
   this.characterService.getCharacters().subscribe((res)=>{
     console.log('movement',res.results)
   });

   this.store.select(store => store.count)
 
  }

  onAdd(){
this.store.dispatch(loadCharacter())
  }

}
