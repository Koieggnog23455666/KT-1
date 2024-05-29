import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrl: './authenticate.component.css'
})
export class AuthenticateComponent {
  constructor(private router:Router){}
submit(name:string,pass:string){

  if(name==='krishna' && pass==='123456'){
    localStorage.setItem("user",'true')
    alert("user Login")
    this.router.navigate(['/'])
  }
 
  else{
    
    localStorage.setItem('user','false')
  }
}
}
