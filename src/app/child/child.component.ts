import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  valeur!: Observable<any>;

  constructor(private shareService: ShareService) {}

  ngOnInit(): void {
    this.valeur = this.shareService.getSubject();
  }
}
