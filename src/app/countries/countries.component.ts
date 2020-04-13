import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  arr: any;

  constructor(private http:HttpClient) { }

getCountry(){
    this.http.get('http://restcountries.eu/rest/v2/all').subscribe(x=>this.arr=x);
}

  ngOnInit() {
  }

}
