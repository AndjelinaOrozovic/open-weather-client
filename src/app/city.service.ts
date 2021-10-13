import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CityService {

  constructor(private http: HttpClient) {
  }

  fetchCities() {
    return this.http.get(`https://localhost:8043/api/cities`);
  }

  addNewCity(cityName: string) {
    return this.http.post(`https://localhost:8043/api/cities`, {name: cityName});
  }

  searchNewCity(cityName: string) {
    return this.http.get(`https://localhost:8043/api/cities/search?newCity=${cityName}`);
  }
}
