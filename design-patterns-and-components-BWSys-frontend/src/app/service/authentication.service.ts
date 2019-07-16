import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UserResponse {  
  user: { username: string; }
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService 
{
    baseUrl = "http://localhost:8080/";
    url="";
    constructor(private http : HttpClient) { }

    addNewUser(email, username, phone, password)
    {
        this.url = this.baseUrl + "auth/signup";
        return this.http.post(this.url, { "email":email, "username":username, "phoneNumber":phone, "password":password} );        
    }

    authenticate(mailid, password) 
    {    
        this.url = this.baseUrl + "auth/login";
        return this.http.post<UserResponse>(this.url, { "email":mailid,"password":password} );        
    }

    isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
    }

    logOut() {
    sessionStorage.removeItem('username')
    }
 
}
