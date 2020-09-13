import { Component, OnInit, OnDestroy } from '@angular/core';
import { HouseService } from './house.service';
import { ApiService } from '../api.service';
import { Subscription } from 'rxjs';
import { House } from './house.model';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit, OnDestroy {
  houses: House[];
  subscription: Subscription;
  length: number = 444;
  pageSize: number = 10;
  pageEvent: PageEvent;
  pageIndex: number;
  pageNumber: number;

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
    this.apiService.getHouses("1", "10");
  }

  onPaginate(pageEvent: PageEvent) {
    this.pageSize = pageEvent.pageSize;
    this.pageNumber = +pageEvent.pageIndex + 1;
    this.apiService.getHouses(this.pageNumber.toString(), this.pageSize.toString());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
