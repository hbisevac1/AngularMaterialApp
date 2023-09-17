import {Component, Inject} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialog,MatDialogModule} from '@angular/material/dialog'
import { NgIf } from '@angular/common';


@Component({
  selector: 'stepper',
  templateUrl: 'stepper.html',
  styleUrls: ['stepper.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
})
export class StepperOverviewExample {

    constructor(public dialog: MatDialog, private _formBuilder: FormBuilder){}

  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    adress: ['', Validators.required],
  });
  isLinear = false;

  openDialog(){
    this.dialog.open(DialogDataExampleDialog, {
        data: {
            name : this.firstFormGroup.get('name')?.value,
            adress: this.secondFormGroup.get('adress')?.value
        }
    })
    console.log(this.firstFormGroup.get('name')?.value)
  }

}

@Component({
    selector: 'dialog-data',
    templateUrl: 'dialog-data.html',
    standalone: true,
    imports: [MatDialogModule, NgIf],
  })
  export class DialogDataExampleDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  }


