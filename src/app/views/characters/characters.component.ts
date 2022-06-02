import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharacterService } from 'src/app/services/character.service';
import { loadCharacter } from 'src/app/state/assessment.actions';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  favoriteSeason?: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  counter? : number;
  constructor(private store : Store<{counter : {counter: number}}>, private characterService: CharacterService) { }

  ngOnInit(): void {
   this.characterService.getCharacters().subscribe((res)=>{
     console.log('movement',res.results)
   })
    this.store.select('counter').subscribe(data =>{
      this.counter = data.counter
    })
  }

  onAdd(){
    this.store.dispatch(loadCharacter())
  }

}
