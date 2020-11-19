import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs/operators';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-formulaire-code',
  templateUrl: './formulaire-code.component.html',
  styleUrls: ['./formulaire-code.component.css'],
})
export class FormulaireCodeComponent implements OnInit {
  resultAvailable!: boolean;

  userForm!: FormGroup;
  pwdForm!: FormGroup;

  usernameCtrl!: FormControl;
  passwordCtrl!: FormControl;
  confirmCtrl!: FormControl;
  birthdateCtrl!: FormControl;

  static isOldEnough(control: FormControl): null | { tooYoung: true } {
    const birthDatePlus18 = new Date(control.value);
    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
    return birthDatePlus18 < new Date() ? null : { tooYoung: true };
  }

  static passwordMatch(group: FormGroup): null | { matchinError: true } {
    const password = group.get('password')?.value;
    const confirm = group.get('confirm')?.value;
    return password === confirm ? null : { matchinError: true };
  }

  isUsernameAvailable(control: AbstractControl): null | { alreadyused: true } {
    const username = control.value;
    return this.shareService.isUsernameAvailable(username)
      ? null
      : { alreadyused: true };
  }

  constructor(private fb: FormBuilder, private shareService: ShareService) {}

  ngOnInit(): void {
    this.usernameCtrl = this.fb.control('', [
      Validators.required,
      (control) => this.isUsernameAvailable(control),
    ]);
    this.passwordCtrl = this.fb.control('', [
      Validators.required,
      Validators.minLength(6),
    ]);
    this.confirmCtrl = this.fb.control('', [Validators.required]);
    this.birthdateCtrl = this.fb.control('', [
      Validators.required,
      FormulaireCodeComponent.isOldEnough,
    ]);

    this.pwdForm = this.fb.group(
      {
        password: this.passwordCtrl,
        confirm: this.confirmCtrl,
      },
      { validator: FormulaireCodeComponent.passwordMatch }
    );

    this.userForm = this.fb.group({
      username: this.usernameCtrl,
      pwdForm: this.pwdForm,
      birthdate: this.birthdateCtrl,
    });

    // this.usernameCtrl.valueChanges.subscribe((value) => console.log(value));
    // this.userForm.valueChanges.subscribe((value) => console.log(value));

    this.usernameCtrl.valueChanges
      .pipe(
        filter((value) => value.length >= 3),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((value) => this.shareService.isAvailable(value))
      )
      .subscribe((result) => (this.resultAvailable = result));
  }

  register(): void {
    console.log(this.userForm.value);
  }

  onReset(): void {
    this.userForm.reset();
  }
}
