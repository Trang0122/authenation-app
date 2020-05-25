import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  heroProfile : FormGroup;
  constructor(private fb : FormBuilder) {   }

  ngOnInit(): void {
     //Dung formgroup, form controll ddeer taoj

    // this.heroProfile = new FormGroup({
    //   name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    //   alterEgo: new FormControl(),
    //   power : new FormControl()
    // })

    
    //Dung FormBuilder
    
    this.heroProfile = this.fb.group({
      name : ['', [Validators.required, Validators.minLength(3)]], //formcontrol, với các validator
      alterEgo : '',
      powers : this.fb.array([
        this.fb.control(''),
      ])
    });
  }

  get powers() : FormArray{
    return this.heroProfile.get('powers') as FormArray;
  }
  addPower(){
    this.powers.push(this.fb.control(''));
  }
  removePower(index : number){
    this.powers.removeAt(index);
  }
  onSubmitForm(){
    //Submit form call api
    console.log(this.heroProfile.value);
    this.heroProfile.reset();
  }

}
