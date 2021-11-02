import { UiService } from './../../services/ui.service';
import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/Categories'
import { CategoriesService } from '../../services/categories.service'
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	categories: Category[] = []
	currentCategory: number = 0;
	subscription: Subscription;

	constructor(private categoryService: CategoriesService, 
		private uiService:UiService) {
			this.subscription = this.uiService.onChange().subscribe((category => 
				(this.currentCategory = category)))
		}

	ngOnInit(): void {
		this.categoryService.getCategories().subscribe((categories) => (this.
			categories = categories).unshift({id: 0, name:"All Categories"}))
	}

	changeCategory(category: Category){
		this.uiService.changeCategory(category)
	}

}
