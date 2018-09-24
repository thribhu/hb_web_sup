import { Component, OnInit } from '@angular/core';
import { SalonModelService } from '../shared/salon-model.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.component.html',
  styleUrls: ['./salon.component.css']
})
export class SalonComponent implements OnInit {

  constructor(private routes: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  newSlaons() {
    this.routes.navigate(['salons/add-salon']);
  }
  salonsNear() {
    this.routes.navigate(['salons/salons-list']);
  }
}
