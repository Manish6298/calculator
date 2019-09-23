import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  first=0;
  second=0;
  result=0;
  add(){
    this.result= + this.first + +this.second; 
  }
  sub(){
    this.result= +this.first - +this.second;
  }
  mul(){
    this.result= +this.first * +this.second;
  }
  div(){
    this.result= +this.first / +this.second;
  }
}
