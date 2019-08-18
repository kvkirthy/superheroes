import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SoftwareAgreementComponent } from '../software-agreement/software-agreement.component';

@Component({
  selector: 'app-superhero-toolbar',
  templateUrl: './superhero-toolbar.component.html',
  styleUrls: ['./superhero-toolbar.component.css']
})
export class SuperheroToolbarComponent implements OnInit {

  @Output() menuClick: EventEmitter<boolean> = new EventEmitter();
  toggleValue: boolean=true;
  fullname: string;

  toggleForMenuClick(){
    this.menuClick.emit(this.toggleValue);
    this.toggleValue = !this.toggleValue;
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  agreementClick(){

    let dialogRef = this.dialog
      .open(SoftwareAgreementComponent,
        {
          width: "800px"
        });
    
      dialogRef.afterClosed()
      .subscribe(
        (data) => this.fullname = data.fullname
      );

  }

}
