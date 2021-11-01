import { Items } from './../interfaces/Items';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private apiUrl = 'http://localhost:8000/items/'

  constructor(private http:HttpClient) {}

  getCategories(): Observable<Items[]>{
    return this.http.get<Items[]>(this.apiUrl)
  }
}
