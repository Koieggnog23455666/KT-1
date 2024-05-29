import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { consumerMarkDirty } from '@angular/core/primitives/signals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit,OnChanges,DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
counter:any
  constructor(router:Router){
    console.log("Constructor called")
    console.log()
    
  }
  @Input() childData="Krishna"
ngOnInit(): void {
  console.log("ngonit called")
 
}
ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
}
ngDoCheck(): void {
  console.log("ngdoCheck called");
}
ngAfterContentInit(): void {
  console.log('ngAfterContentInit');
}

ngAfterContentChecked(): void {
  console.log('ngAfterContentChecked');
}

ngAfterViewInit(): void {
  console.log('ngAfterViewInit');
}

ngAfterViewChecked(): void {
  console.log('ngAfterViewChecked');
}

ngOnDestroy(): void {
  console.log('ngOnDestroy');
}
}
