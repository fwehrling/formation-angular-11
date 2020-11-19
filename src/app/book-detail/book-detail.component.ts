import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
// import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit, OnDestroy {
  // id!: number;
  // subscription = new Subscription();
  id!: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private shareService: ShareService
  ) {}

  ngOnInit(): void {
    // this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    // this.subscription.add(
    //   this.activatedRoute.paramMap.subscribe((id) => (this.id = +id))
    // );

    this.id = this.activatedRoute.paramMap.pipe(
      map((params: ParamMap) => params.get('id'))
    );
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }

  changeSubject(): void {
    this.shareService.setSubject('Je change le texte');
  }
}
