import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';
import { DataService } from 'src/app/services/data.service';
import { loadCharacter, loadLocation } from 'src/app/state/assessment.actions';
import { CounterState } from 'src/app/state/assessment.reducer';
import { ViewLocationsComponent } from '../modals/view-details/view-locations/view-locations.component';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  displayAllLocations: boolean = false;
  selectedRow!: any;
  displayedColumns: string[] = [
    'Name',
    'Dimension',
    'Actions',
  ];

  dataSource!: MatTableDataSource<any>;
  dataSourceTwo!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private store: Store<{ count: CounterState }>,private dialogRef: MatDialog,
    private characterService: CharacterService, private dataService : DataService) {
 }

  ngOnInit(): void {
    this.store.dispatch(loadLocation());
    this.dataService.locationDetails.subscribe((res)=>{
      console.log('component',res);
      if (Object.keys(res).length === 0) {
        this.displayAllLocations = true;
      }else{
        this.displayAllLocations = false;
      }
      this.initDataSource(res);
      
    });
  }


  
  openDialog(selectedItem: any): void {
    this.selectedRow = selectedItem;
    this.dialogRef.open(ViewLocationsComponent, {
      width: '600px',
      height: '50vh',
      data: {
        name: this.selectedRow.name,
        dimension: this.selectedRow.dimension,
        url: this.selectedRow.url,
        created: this.selectedRow.created,

      },
    });
  };

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
