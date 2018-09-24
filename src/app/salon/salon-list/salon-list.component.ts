import { Component, OnInit } from '@angular/core';
import { SalonModelService } from '../../shared/salon-model.service';
import { SalonModel } from '../../shared/salon.model';

@Component({
  selector: 'app-salon-list',
  templateUrl: './salon-list.component.html',
  styleUrls: ['./salon-list.component.css']
})
export class SalonListComponent implements OnInit {

  constructor(private singleSalon: SalonModelService) { }
  salons: SalonModel[] = [];
  ngOnInit() {
    this.salons = this.singleSalon.getSalons();
   // console.log('list componets: ', this.salons);
  }

}
