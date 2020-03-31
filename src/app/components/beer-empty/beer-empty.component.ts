import { Component, OnInit, Input } from '@angular/core';
import { BeerService } from '../../services/beer-service.service';
import { BeerFiltersComponent } from '../beer-filters/beer-filters.component';



@Component({
  selector: 'app-beer-empty',
  templateUrl: './beer-empty.component.html',
  styleUrls: ['./beer-empty.component.css']
})
export class BeerEmptyComponent implements OnInit {

  @Input() filters: BeerFiltersComponent;  

  constructor(private beerService: BeerService) {}

  ngOnInit() {
  }
  homePage() {
    // Resets filter select items because drunk
    this.filters.selectedItems = [];
    this.beerService.homePage();
  }  
}