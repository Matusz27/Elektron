import { Items } from './../../interfaces/Items';
import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-items-display',
  templateUrl: './items-display.component.html',
  styleUrls: ['./items-display.component.scss']
})
export class ItemsDisplayComponent implements OnInit {

	items: Items[] = []

	constructor(private itemService: ItemsService) {}

	ngOnInit(): void {
		this.itemService.getCategories().subscribe((items) => (this.
			items = items))
	}
}