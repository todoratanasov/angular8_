import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  //по този начин закачаме за Subscription, за да си присвоим събджкета долу и да си го ползваме, а не всеки път да го this.service...
  private activatedSub: Subscription;
  constructor(private userService: UserService) {
  }
  //тук се закачаме за емитъра създаден в UserService и почваме да го слушаме. Когато се изпълни ни връща boolean, който boolean го закачаме за пропъртито тук и си правим ngIf в html-а, който ще си свърши работата !!има по-добър начин да се прави това със subject!!, но sybsrcibe-ването е същото
  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(didActivated => {
      this.userActivated = didActivated;
    })
  }
  //и от събджкекта се unsubscribe
  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }
}
