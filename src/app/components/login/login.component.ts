import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { Userlogin } from '../../userlogin.model';
import { UserResponse } from '../../user-response.model';
import { error } from '@angular/compiler/src/util';
import { User } from '../../user.model';
export function validatorUserName(c : AbstractControl){
  const users= ['admin','manager'];
  return (users.includes(c.value))? {
    invalidusername : true
  } : null;
}
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public currentAcount : UserResponse;

  userLogin : FormGroup;
  constructor(
    private fb : FormBuilder,
    private service : AccountService
    ) { }

  ngOnInit(): void {
    this.userLogin = this.fb.group({
      user: this.fb.group({
        email : ['',[Validators.required, validatorUserName]],
        password : ['',[Validators.required, Validators.minLength(6)]]
      })
      
                      //  Validators.minLength(6),
                      //  forbiddenPasswordValidator([new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})")])]],
      //Custom validator là một function có đầu vào là một AbstractControl, trả về 1 promise, null hay một obserable
    })
  }

  login(userLogin : FormGroup){
    this.service.login(userLogin.value).subscribe(data => {
      alert("Đăng nhập thành công")
    },
    error => {
      alert("Có lỗi khi đăng nhập, vui lòng thử lại sau")
    }
      
    )
  } 
}
