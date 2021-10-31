import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor() { }

   ngOnInit(): void {
  }


}
