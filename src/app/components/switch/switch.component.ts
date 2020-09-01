import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  mycase:number;
  constructor() {
    this.mycase=13;
   }

  ngOnInit(): void {
  }

}
