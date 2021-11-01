import { Component, OnInit, Input } from '@angular/core';
import { Items } from '../../interfaces/Items';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() item!: Items;
  
  constructor() { }

  ngOnInit(): void {
  }

}
