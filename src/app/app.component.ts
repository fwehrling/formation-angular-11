import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareService } from './services/share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  valeur!: Observable<any>;

  constructor(private shareService: ShareService) {}

  ngOnInit(): void {
    this.valeur = this.shareService.getSubject();
  }
}
