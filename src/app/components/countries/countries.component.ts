import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import { error } from 'protractor';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
 
  public data:any;
  constructor(private _service:CountriesService) { }

  ngOnInit(): void {
    this._service.getCountries().subscribe(Response=>{
      this.data = Response;
    },
    (error)=>{
      console.error(error);
    }
    );
  }

}
