import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-cancel-confirm-bottomsheet',
  templateUrl: './cancel-confirm-bottomsheet.component.html',
  styleUrls: ['./cancel-confirm-bottomsheet.component.css']
})
export class CancelConfirmBottomsheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef) { }

  ngOnInit() {
  }

  onOkClick(){
    this.bottomSheetRef.dismiss({ clicked: "Ok"});
  }
  
  onCancelClick(){
    this.bottomSheetRef.dismiss({ clicked: "Cancel"});
  }
}
