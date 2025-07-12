import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { WeatherResponse } from '../model/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl = 'https://wttr.in';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<WeatherResponse> {
    const url = `${this.baseUrl}/${city}?format=j1`;
    return this.http.get<WeatherResponse>(url).pipe(
      map(res => res) 
    );
  }
}
