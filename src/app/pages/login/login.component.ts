import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup ;
  constructor(private fb : FormBuilder){}



  ngOnInit(): void {

    this.buildloginForm()
    console.log(this.loginForm.value);

  }

buildloginForm (){
  this.loginForm = this.fb.group({
    username: [null , Validators.required] ,
    password : [null , Validators.required]
  })
  

}

onLogin() {
  if (this.loginForm.valid) {
    console.log(this.loginForm.value);

  }
}


}
