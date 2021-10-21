import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ICity } from "./CityData/ICity";

const BASEURL = 'https://localhost:8043/api/cities';

@Injectable()
export class CityService {

  constructor(private http: HttpClient) {
  }

  fetchCities() {
    return this.http.get(`${BASEURL}`);
  }

  addNewCity(city: ICity) {
    return this.http.post(`${BASEURL}`, city);
  }

  searchNewCity(cityName: string) {
    return this.http.get(`${BASEURL}/search?newCity=${cityName}`);
  }
}
