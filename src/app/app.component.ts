import { Component, inject } from '@angular/core';
import { Router,Event, NavigationStart, ResolveEnd, ActivationStart, RouteConfigLoadStart, RouteConfigLoadEnd, ResolveStart, ChildActivationStart, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
  data=""
  submit(val:string){
this.data=val
  }
  constructor(){
    localStorage.setItem('user','false')
  }
  routes:Router=inject(Router)
  ngOnInit(){
    this.routes.events.subscribe((res:Event)=>{
      if(res instanceof NavigationStart){
        console.log(res.url)
      }
      if(res instanceof ResolveEnd){
        console.log(res.url)
      }
      if(res instanceof RouteConfigLoadStart){
        console.log(res)
      }
      if(res instanceof RouteConfigLoadEnd){
        console.log("Route Load Ends",res)
      }
      if(res instanceof ActivationStart){
        console.log("Activation start",res.snapshot.url)
      }
      
      if(res instanceof ResolveStart){
        console.log("Route Load start",res)
      }
      if(res instanceof ChildActivationStart){
        console.log("Child Activation start",res)
      }
      if(res instanceof NavigationError){
        console.log("Scroll",res.error)
      }
      
      if(res instanceof NavigationCancel){
        console.log("Naviagtion cancel",res.id)
      }
      
    })
  }

}
