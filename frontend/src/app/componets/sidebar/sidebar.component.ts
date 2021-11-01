import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/Categories'
import { CategoriesService } from '../../services/categories.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	categories: Category[] = []

	constructor(private categoryService: CategoriesService) {}

	ngOnInit(): void {
		this.categoryService.getCategories().subscribe((categories) => (this.
			categories = categories))
	}
}
