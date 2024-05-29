import { ResourceLoader } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,Event, NavigationEnd, NavigationStart, ResolveStart } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})

export class AboutComponent implements OnInit {
  routeId:number=0
  constructor(private router:ActivatedRoute,private route:Router){
  }
ngOnInit(): void {
  
}

}
