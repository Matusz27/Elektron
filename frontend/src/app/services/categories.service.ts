import { Injectable } from '@angular/core';
import { Category } from '../interfaces/Categories'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = 'http://localhost:8000/catogries/'

  constructor(private http:HttpClient) {}

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl)
  }
}
