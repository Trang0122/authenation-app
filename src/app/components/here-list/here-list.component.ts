import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './here-list.component.html',
  styleUrls: ['./here-list.component.css']
})
export class HereListComponent implements OnInit {
  @Input('heroList') heroList : Hero[];

  constructor() { }

  ngOnInit(): void {
  }

}
