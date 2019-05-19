import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { Superhero } from '../models/superhero';

@Component({
  selector: 'app-create-superhero-reactive-form',
  templateUrl: './create-superhero-reactive-form.component.html',
  styleUrls: ['./create-superhero-reactive-form.component.css']
})
export class CreateSuperheroReactiveFormComponent implements OnInit {


  superheroFormGroup: FormGroup;

  // name: FormControl = new FormControl("Chhotta Bheem by default");
  // email: FormControl = this.fb.control("");
  // details: FormControl = this.fb.control("");
  // powers: FormControl = this.fb.control("");
  // country: FormControl = this.fb.control("");
  // favFood: FormControl = this.fb.control("");

  favs = [];
  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.superheroFormGroup = new FormGroup( {
      name: new FormControl('', Validators.required),
      email:new FormControl('', [Validators.required, Validators.email]),
      details: new FormControl('', [Validators.minLength(5),Validators.maxLength(100)]),
      powers: new FormControl(''),
      country: new FormControl('')
    });


    // this.superheroFormGroup = this.fb.group({
    //   name:['', Validators.required],
    //   email:['', Validators.required, Validators.email],
    //   details: ['', Validators.minLength(5), Validators.maxLength(100)],
    //   powers: '',
    //   country: '',
    //   one:'',
    //   favFood: [this.favs, []]

    // });

    // this.superheroFormGroup
    // .valueChanges
    // .subscribe(item => 
    //   console.log("Stream as form changes, ", item as Superhero));

    this.superheroFormGroup
    .valueChanges
    .subscribe(item => {

      let i=this.email;
      console.log(i, i.touched, i.invalid)
      if(i.touched && i.invalid){
        console.log("Set a flag to show email validation error");
      }

      // console.log("Form status", this.superheroFormGroup.status, this.superheroFormGroup.errors);
      // console.log("Email status", 
      //   this.email, this.email.pristine, this.email.dirty, this.email.touched, this.email.untouched, this.email.valid, this.email.invalid);
      // console.log("Email Error Status",
      //   this.email.errors.email);

    });


    // setTimeout( () => this.name.setValue("Value set on timeout"), 1000);
  }

  get name(){
    return this.superheroFormGroup
      .get("name");
  }

  get email(){
    return this.superheroFormGroup
      .get('email');
  }

  get favFood(){
    return this.superheroFormGroup.get('favFood') as FormArray
  }

  submitHanlder(){
    let superhero = this.superheroFormGroup.value as Superhero;
    console.log("Superhero model object ", superhero);
  }

  changeHandler(){    
    // console.log("Log the snapshot at a point in time, ", this.name.value);
  }

  removeHandler(){

  }

}
