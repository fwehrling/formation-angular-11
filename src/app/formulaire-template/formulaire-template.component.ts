import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../classes/user';

@Component({
  selector: 'app-formulaire-template',
  templateUrl: './formulaire-template.component.html',
  styleUrls: ['./formulaire-template.component.css'],
})
export class FormulaireTemplateComponent implements OnInit {
  user = new User();

  constructor() {}

  ngOnInit(): void {
    this.user.username = 'franck';
  }

  register(): void {
    console.log(this.user);
  }
}
