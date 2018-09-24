import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaceServiceService implements OnInit {
  latitude;
  longitude;

  constructor() { }
  ngOnInit() {
   // this.gettingCurrentLocation();
  }
  coords(lat, long) {
    this.latitude = lat;
    this.longitude = long;
    console.log(this.latitude, this.longitude);
  }
  private gettingCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        console.log('log from service', this.latitude, this.longitude);
      });
    }
  }

  public settingLatAndLong(lat, lon) {
    this.latitude = lat;
    this.longitude = lon;
    console.log('log from service', this.latitude, this.longitude);
  }
}

