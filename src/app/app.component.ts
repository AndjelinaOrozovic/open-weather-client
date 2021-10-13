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

  citiesFromDatabase : any;
  isClickedRow = false;
  cityName = '';
  city : ICity;
  cityFromSearch : ICity;

  // constructor(private http: HttpClient) {      //pravljeno na pocetku, kasnije premjesteno u servis
  // }

  constructor(private cityService: CityService) {
  this.city = null;
  }

  ngOnInit() {
    this.onFetchCities();
  }

  onFetchCities() {
    this.cityService.fetchCities().
    subscribe(cities => {
      console.log(cities);
      this.citiesFromDatabase = cities;
    });
  }

  onCitiesQuery = (cityName : string) => this.cityService.searchNewCity(cityName);

  onAddCity() {
    console.log(this.city);
    console.log(this.onCitiesQuery);
  }

  // onAddCity(cityName: string) {  // metoda za dohvatanje jednog grada u bazu uz pomoc stringa, tj city.name
  //   if (cityName != "") {
  //   this.cityName = cityName;
  //   console.log(this.cityName);
  //   this.cityService.addNewCity(this.cityName).
  //   subscribe(responseCity => {
  //     console.log(responseCity);
  //   });
  //   setTimeout(()=>{
  //     location.reload();
  //   }, 100);
  //   } else alert("The field is empty!");
  // }

  get hasCities() : boolean {
    return this.citiesFromDatabase?.length ? true : false;
  }

  // private fetchCities() {
  //   this.http.get('https://localhost:8043/api/cities').    //pravljeno na pocetku, kasnije premjesteno u servis
  //   subscribe(cities => {
  //     console.log(cities);
  //     this.citiesFromDatabase = cities;
  //   });
  // }

  isClicked(city: ICity) {
    this.isClickedRow = true;
    this.city = city;
    console.log (city);
  }

}
