import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICity } from "./CityData/ICity";

@Injectable()
export class CityService {

  constructor(private http: HttpClient) {
  }

  fetchCities() {
    return this.http.get(`https://localhost:8043/api/cities`);
  }

  addNewCity(city: ICity) {
    return this.http.post(`https://localhost:8043/api/cities`, city);
  }

  searchNewCity(cityName: string) {
    return this.http.get(`https://localhost:8043/api/cities/search?newCity=${cityName}`);
  }
}
