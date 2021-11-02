import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Category } from '../interfaces/Categories';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private filterCategorySelected: number = 0;
  private Subject = new Subject();


  constructor() { }

  changeCategory(category:Category): void{
    this.filterCategorySelected = category.id
    this.Subject.next(this.filterCategorySelected)
  }

  onChange(): Observable<any>{
    return this.Subject.asObservable();
  }

}
