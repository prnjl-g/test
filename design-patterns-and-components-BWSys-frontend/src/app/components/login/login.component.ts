import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

    username = '';
    password = '';
    mailid = '';
    phone = '';
    invalidLogin = false;
    invalidUser = false;
    switchToLoginPage = true;
    errorMessage = '';

    constructor(private router: Router,private loginservice: AuthenticationService) {  }

    checkValidLogin(mail,pass)
    {
        console.log(mail);
        if(mail.errors || pass.errors)
            return true;
        else
            return false;
    }

    checkValidUser(mail,user,ph,pass)
    {
        if(mail.errors || user.errors || ph.errors || pass.errors)
            return true;
        else
            return false;
    }



    checkLogin(mail,pass) 
    {
        if(mail.errors || pass.errors){
            return;
        }

        this.loginservice.authenticate(this.mailid, this.password) 
        .subscribe( 
            data  => { 
                        if(data.message==='Success!')
                        {
                            sessionStorage.setItem('username', data.user.username);
                            this.invalidLogin = false;
                            this.router.navigate(['home'])
                        }
                    },
            error => { 
                        if(error.error.message==="Incorrect credentials" || error.error.message==="User doesn't exist")
                            this.errorMessage = error.error.message;
                        this.invalidLogin = true
                    }
            );     
    }

    registerNewUser()
    { 
        this.loginservice.addNewUser(this.mailid,this.username,this.phone,this.password)
        .subscribe( 
            data  => { 
                        this.switchToLoginPage = true;
                        this.password = '';
                        this.invalidUser = false;
                        this.invalidLogin = false;
                        },
            error  => { 
                        if(error.error.message==="User already exists, please check email.")
                            this.errorMessage = "email already exists";
                        else if(error.error.message==="User already exists, please check phone number.")
                            this.errorMessage = "Phone number already exists";

                        this.invalidUser = true;
                    }
            );
    }

    switchToRegister(){
    this.switchToLoginPage = false;
    }

    switchToLogin(){
    this.switchToLoginPage = true;
    }

}