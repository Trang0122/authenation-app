import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { NgForm, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Usersignup } from 'src/app/usersignup.model';

export function forbiddenPasswordValidator(nameRe: RegExp[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    let result = true;
    for(let re of nameRe){
      if(re.test(control.value)) result = false;
    }
    return result ? {'forbiddenPassword' : true} : null;
  };
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form : FormGroup;
  constructor(
    private service : AccountService,
    private fb : FormBuilder,
    ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      user : this.fb.group({
        username: ['', Validators.required],
        email : ['', Validators.email],
        password : ['', forbiddenPasswordValidator([new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})")])]
      })
    })
  }

  signup(form : FormGroup){
    console.log(form.value);
    this.service.signup(form.value).subscribe(data => {
      alert("Đăng kí tài khoản thành công");
      console.log(data)
    }
    )
  }
}
