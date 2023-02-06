import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { NgControl, NgModel } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('abc') abc: NgModel | undefined;

  constructor(private user: UserService) {}
  userInput = '';

  login() {
    if (this.userInput) {
      this.user.login(this.userInput);
    }
  }

  ngOnInit(): void {}
  ngOnChanges(): void {
    console.log(this.userInput);
  }
  ngAfterViewInit(): void {
    console.log('abc', this.abc);
    this.abc?.valueChanges?.subscribe((e) => {
      console.log(e);
    });
  }
}
