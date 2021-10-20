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
  cityFromTable : ICity; //ovo dodati za grad iz tabele kad selektujemo da ga search ne kupi

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
      this.citiesFromDatabase = cities;
    });
  }

  onCitiesQuery = (cityName : string) => this.cityService.searchNewCity(cityName);

  ispis() { //probavano samo da li se ispravno dodaje
    console.log(this.citiesFromDatabase);
    console.log(this.onCitiesQuery);
  }

  //metoda za dodavanje novog grada u bazu
  onAddCity(city: ICity) {
    this.cityService.addNewCity(this.city).
    subscribe(responseCity => {
      console.log(responseCity);
    });
    setTimeout(()=>{
      location.reload();
    }, 100);
  }

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
    this.cityFromTable = city;
    console.log (city);
  }

}
