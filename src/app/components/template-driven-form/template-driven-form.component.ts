import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../hero.model';


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  public listHero : Hero[] = [this.model];
  
  constructor() { }

  ngOnInit(): void {
  }
  submitted = false;

  onSubmit(formHero : Hero) { 
    this.listHero.push(formHero);
   }
}
