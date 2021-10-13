import { IMain } from "./IMain";
import { IWeather } from "./IWeather";
export interface ICity {

  name: string,

  coord?: {
      lat: number;
      lon: number;
  },

  main?: IMain,

  dt?: number,

  wind?: {
    speed: number,
    deg: number
  },

  sys?: {
    country: string
  },

  rain?: null,

  snow?: null,

  clouds?: {
    all: number
  },

  weather?: IWeather

}
