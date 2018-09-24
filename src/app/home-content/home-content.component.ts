import { Component, OnInit } from '@angular/core';
import { PlaceServiceService } from '../place-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  userPosition;
  lat;
  lon;
  zoom: 12;
  constructor( private place: PlaceServiceService, private client: HttpClient) { }
  ngOnInit(): void {
     // this.getResults();
/*
    if (window.navigator && window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
            position => { this.userPosition = position;
              this.lat = this.userPosition.coords.latitude;
              this.lon = this.userPosition.coords.longitude;
              this.place.coords(this.lat, this.lon);
                // console.log('latitude: ', this.lat + '\n' + 'longitude: ', this.lon);
            },
            error => {
                switch (error.code) {
                    case 1:
                        console.log('Permission Denied');
                        break;
                    case 2:
                        console.log('Position Unavailable');
                        break;
                    case 3:
                        console.log('Timeout');
                        break;
                }
            }
        );
    }
    */
this.setPosition();
}

private getResults() {
    const url =
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=';
    const api_key = 'your api';
    this.client.get(url + api_key).subscribe(data => {
        console.log(data);
    });
}

private setPosition() {
  if ( 'geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.place.settingLatAndLong(this.lat, this.lon);
      });
  }
}
}
