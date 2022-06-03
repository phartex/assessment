import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';
import { DataService } from 'src/app/services/data.service';
import { loadCharacter, loadEpisode, loadLocation } from 'src/app/state/assessment.actions';
import { CounterState } from 'src/app/state/assessment.reducer';
import { ViewDetailsComponent } from '../modals/view-details/view-details.component';
import { ViewEpisodesComponent } from '../modals/view-details/view-episodes/view-episodes.component';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  displayAllEpisodes: boolean = false;
  selectedRow!: any;
  displayedColumns: string[] = [
    'Name',
    'Air Date',
    'Actions',
  ];

  dataSource!: MatTableDataSource<any>;
  dataSourceTwo!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private store: Store<{ count: CounterState }>,private dialogRef: MatDialog,
    private characterService: CharacterService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadEpisode());
    this.dataService.locationDetails.subscribe((res) => {
      console.log('component', res);
      if (Object.keys(res).length === 0) {
        this.displayAllEpisodes = true;
      }else{
        this.displayAllEpisodes = false;
      }
      this.initDataSource(res);

    });
  }

  openDialog(selectedItem: any): void {
    this.selectedRow = selectedItem;
    this.dialogRef.open(ViewEpisodesComponent, {
      width: '600px',
      height: '50vh',
      data: {
        name: this.selectedRow.name,
        airDate: this.selectedRow.air_date,
        episode: this.selectedRow.episode,
        url: this.selectedRow.url,
        created: this.selectedRow.created,

      },
    });
  }

  initDataSource(responseData: any): void {
    if (responseData) {
      // this.chequeRequestList = responseData;

      console.log('init data cheque list', responseData);
      // this.prepareTable();

      this.dataSource = new MatTableDataSource<any>(responseData);


      this.dataSourceTwo.paginator = this.paginator;
      this.dataSourceTwo.sort = this.sort;
    }
  };
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
