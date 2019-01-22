import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../model/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  public username:string;
  public password:string;
  public errorMessage:string;

  constructor(private router:Router, private auth:AuthService) { }

  authenticate(form:NgForm){
    if(form.valid){
      this.auth.authenticate(this.username, this.password).subscribe(response=>{
        console.log( response )
        if(response){
          this.router.navigateByUrl('/admin/main');
        }
        this.errorMessage = 'Form Data Invalid';
      })
    }else{
      this.errorMessage = 'Form Data Invalid';
    }
  }

  ngOnInit() {
  }

}
