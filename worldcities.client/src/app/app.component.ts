import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

import { ConnectionService, ConnectionServiceOptions, ConnectionState } from
  'ng-connection-service';
import { Observable, map } from 'rxjs';
import { environment } from '../environments/environment';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.authService.init();
  }
}
