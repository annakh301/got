import { Component, OnInit, OnDestroy } from '@angular/core';
import { HouseService } from './house.service';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';
import { House } from './house.model';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit, OnDestroy {
  houses: House[];
  subscription: Subscription;
  constructor(
    private houseService: HouseService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.subscription = this.houseService.housesChanged
      .subscribe(
        (houses: House[]) => {
          this.houses = houses;
        }
      );
    this.houses = this.houseService.getHouses();
    this.apiService.getHouses();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
