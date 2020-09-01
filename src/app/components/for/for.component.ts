import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.scss']
})
export class ForComponent implements OnInit {

  courses:string[];
  students:object[];
  color:string;
  fontsize:string;
  useTdata:boolean;
  classObj:object;

  constructor() { 
    this.courses=["Angular","React","Node"];
    this.students=[{fName:"Aditi",lName:"Rathod",score:90},
    {fName:"Vrisha",lName:"Tank",score:95},
    {fName:"Charmy",lName:"Tank",score:92}];
    this.color="green";
    this.fontsize="40";
    this.useTdata=true;
    this.classObj={
      tdata:this.useTdata
    }

  }

   
  ngOnInit(): void {
  }

}
