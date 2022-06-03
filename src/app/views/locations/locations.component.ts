import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';
import { DataService } from 'src/app/services/data.service';
import { loadCharacter, loadLocation } from 'src/app/state/assessment.actions';
import { CounterState } from 'src/app/state/assessment.reducer';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  allLocations: any;
  
  constructor(private store: Store<{ count: CounterState }>,
    private characterService: CharacterService, private dataService : DataService) {
 }

  ngOnInit(): void {
    this.store.dispatch(loadLocation());
    this.dataService.locationDetails.subscribe((res)=>{
      console.log('component',res);
      this.allLocations = res;
      
    });
  }

}
