import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { LoginForm, RegistrationForm } from '../types/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated:boolean = false;
  isLoading: boolean = false;
  passwordMatched: boolean = true;

  constructor(private router: Router) { }

  login(form: LoginForm){
    if (this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        this.router.navigate(['']);
        // Signed in 
        const user = userCredential.user;
        alert('Logged in');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Not Logged in');
      })
      .finally(() =>(this.isLoading = false));
  }

  register(form: RegistrationForm){ if (this.isLoading) return;
    this.isLoading = true;
    if(form.password !== form.confirm_password){
      this.passwordMatched = false;
      return
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      // Signed in 
      // const user = userCredential.user;
      this.isAuthenticated = true;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.isAuthenticated = false;
      // ..
    })
    .finally(() =>(this.isLoading = false));
  }

  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      this.router.navigate(['login']);
      this.isAuthenticated = false;
    }).catch((error) => {
      // An error happened.
    });
  }
}
