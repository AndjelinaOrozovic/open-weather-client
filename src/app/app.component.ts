import { Component, OnInit } from '@angular/core';
import { CityService } from './city.service';
import { ICity } from './CityData/ICity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CityService]
})

export class AppComponent implements OnInit {

  citiesFromDatabase: any;
  isClickedRow: boolean = false;
  city: ICity;
  cityFromTable: ICity;

  constructor(private cityService: CityService) {
  this.city = null;
  }

  ngOnInit() {
    this.onFetchCities();
  }

  onFetchCities() {
    this.cityService.fetchCities().
    subscribe(cities => {
      this.citiesFromDatabase = cities;
    });
  }

  onCitiesQuery = (cityName : string) => this.cityService.searchNewCity(cityName);

  onAddCity(city: ICity) {

    for (let i of this.citiesFromDatabase) {
      if (i.name == city.name) {
        window.alert("City already exists!");
      }
    }

    this.cityService.addNewCity(this.city).subscribe();
    setTimeout(() => {
      location.reload();
    }, 100);

  }

  get hasCities(): boolean {
    return this.citiesFromDatabase?.length ? true : false;
  }

  get hasCity(): boolean {
     return !!this.city;
  }

  isClicked(city: ICity) {
    this.isClickedRow = true;
    this.cityFromTable = city;
  }

}
