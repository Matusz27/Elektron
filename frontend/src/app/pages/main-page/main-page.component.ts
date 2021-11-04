import { UiService } from '../../services/ui.service';
import { Items } from '../../interfaces/Items';
import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-items-display',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class ItemsDisplayComponent implements OnInit {

	subscription: Subscription;

	items: Items[] = []
  currentItems: Items[] = this.items
  

	constructor(private itemService: ItemsService, private uiService:UiService) {
    this.subscription = this.uiService.onChange().subscribe(Currentcategory => 
      (this.currentItems = this.items.filter((category) => {
        if (Currentcategory === 0){
          return true;
        }
        return category.id === Currentcategory   
      }))
    )
  }

	ngOnInit(): void {
		this.itemService.getItems().subscribe((items) => (
      this.items = items, 
      this.currentItems = items 
      ))
	}
}