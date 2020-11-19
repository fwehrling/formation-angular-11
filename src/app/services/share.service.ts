import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  subject = new BehaviorSubject<any>('COUCOU');

  constructor() {}

  setSubject(value: any): void {
    this.subject.next(value);
  }

  getSubject(): Subject<any> {
    return this.subject;
  }

  loggedIn(): boolean {
    return true;
  }

  isUsernameAvailable(value: string): boolean {
    if (value === 'toto') {
      return false;
    }

    return true;
  }

  isAvailable(value: string): Observable<boolean> {
    if (value === 'toto') {
      return of(false);
    }

    return of(true);
  }
}
