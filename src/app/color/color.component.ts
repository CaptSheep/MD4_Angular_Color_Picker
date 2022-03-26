import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colorRed : string = '128' ;
  colorGreen : string = '128';
  colorBlue: string = '128';
  color : string = 'blue';
  constructor() { }

  ngOnInit() {
  }

  changeColor() {
   return `rgb(${this.colorRed},${this.colorGreen},${this.colorBlue})`
 
    
  }
  
  
}
