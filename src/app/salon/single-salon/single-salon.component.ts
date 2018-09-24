import { Component, OnInit, Input } from '@angular/core';
import { SalonModelService } from '../../shared/salon-model.service';
import { SalonModel } from '../../shared/salon.model';

@Component({
  selector: 'app-single-salon',
  templateUrl: './single-salon.component.html',
  styleUrls: ['./single-salon.component.css']
})
export class SingleSalonComponent implements OnInit {
  Salons: SalonModel[] = [];
  @Input() salon_1: SalonModel;
  constructor(private salon: SalonModelService) { }

  ngOnInit() {
    this.Salons = this.salon.getSalons();
  }

}
