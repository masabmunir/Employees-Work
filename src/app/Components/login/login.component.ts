import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private fb:FormBuilder,
              private router:Router) {
  }
  loginForm!:FormGroup

ngOnInit() {
    this.formControl();
}

formControl(){
    this.loginForm = this.fb.group({
      name:["",Validators.required],
      password:["",Validators.required]
    })
}
  submit(name:any){
  this.router.navigateByUrl('/dashboard')
  }


}
