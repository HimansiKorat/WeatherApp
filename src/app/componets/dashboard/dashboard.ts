import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../service/weather-service';
import { WeatherResponse } from '../../model/weather.model';
import { Router } from '@angular/router'; // 👈 Add this
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  providers: [WeatherService],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  city: string = 'Ahmedabad';
  weatherData!: WeatherResponse;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private weatherService: WeatherService,
    private router: Router 
  ) {}

  ngOnInit(): void {
    this.getWeatherData();
  }

  getWeatherData(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to fetch weather data.';
        this.isLoading = false;
      }
    });
  }

  onSearch(): void {
    if (this.city.trim()) {
      this.getWeatherData();
    }
  }

  goToProduct(): void {
    this.router.navigate(['/product']); 
  }
}
