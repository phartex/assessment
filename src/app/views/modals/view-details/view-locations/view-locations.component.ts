import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-locations',
  templateUrl: './view-locations.component.html',
  styleUrls: ['./view-locations.component.scss']
})
export class ViewLocationsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<ViewLocationsComponent>) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  };
}
