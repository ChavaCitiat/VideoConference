import { Injectable } from '@angular/core';
import { Configuration } from '../models/configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  readConfigValues(): Configuration {
    
    //read config values and returns as model
  }
}
