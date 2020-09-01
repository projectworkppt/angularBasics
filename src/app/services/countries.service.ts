import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private _httpClient:HttpClient) { }
  public getCountries():any{
    return this._httpClient.get("https://restcountries.eu/rest/v2/all");
    /**error=>{
      *this.handleError(error);
    }*/
  }
/** 
  *public handleError(error){
  *  console.error("Error is: "+error);
  *  return observable.throw( error || "Internal Server Error"); 
    
  }*/
}
