import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

constructor(private httpClient: HttpClient) { }

getCurrentWeatherByZipCode(zipCode:string){
  return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?zip='+zipCode+',in&appid=5a4b2d457ecbef9eb2a71e480b947604');
}

getForCastWeather(zipCode:string) {
  return this.httpClient.get('http://api.openweathermap.org/data/2.5/forecast/daily?zip='+zipCode+',in&appid=5a4b2d457ecbef9eb2a71e480b947604');
}

}
