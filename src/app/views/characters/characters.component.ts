import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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
  constructor(private store : Store<{counter : {counter: number}}>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(data =>{
      this.counter = data.counter
    })
  }

  onAdd(){
    this.store.dispatch(loadCharacter())
  }

}
