import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CharacterService } from 'src/app/services/character.service';
import { DataService } from 'src/app/services/data.service';
import { loadCharacter } from 'src/app/state/assessment.actions';
import { CounterState } from 'src/app/state/assessment.reducer';
import { ViewDetailsComponent } from '../view-details/view-details.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  // characters$: Observable<number>
  allCharacters: any;
  selectedRow!: any;
  displayedColumns: string[] = [
    'Name',
    'Species',
    'Actions',
  ];

  dataSource!: MatTableDataSource<any>;
  dataSourceTwo!: MatTableDataSource<any>;

  constructor(private store: Store<{ count: CounterState }>, private dialogRef: MatDialog,
    private characterService: CharacterService, private dataService: DataService) {

  }

  ngOnInit(): void {
    this.store.dispatch(loadCharacter());
    this.dataService.characterDetails.subscribe((res) => {
      console.log('component', res);
      this.allCharacters = res;
      this.initDataSource(res);

    });
  }

  openDialog(selectedItem: any): void {
    this.selectedRow = selectedItem;
    this.dialogRef.open(ViewDetailsComponent, {
      data: {
        Name: this.selectedRow.name,
        // accountNumber: this.selectedRow.accountNumber,
        // branchAddress: this.selectedRow.branchAddress,
        // branchCode: this.selectedRow.branchCode,
        // branchName: this.selectedRow.branchName,
        // chequeType: this.selectedRow.chequeType,
        // dateOfRequest: this.selectedRow.dateOfRequest,
        // requestBranchName: this.selectedRow.requestBranchName,
        // deliveryAddress: this.selectedRow.deliveryAddress,

      },
    });
  }

  initDataSource(responseData: any): void {
    if (responseData) {
      // this.chequeRequestList = responseData;

      console.log('init data cheque list', responseData);
      // this.prepareTable();

      this.dataSource = new MatTableDataSource<any>(responseData);


      // this.dataSourceTwo.paginator = this.paginator;
      // this.dataSourceTwo.sort = this.sort;
    }
  };

}
