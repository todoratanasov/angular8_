import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  //инжектираме си UserService защото сме казали на сървиса, че ще е инджектабъл
  constructor(private route: ActivatedRoute, private userService: UserService) { }
  isActive = false;
  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }
  //правим си метод, който когато е извикан активира (емитва) емитъра !!има по-добър начин да се прави това със subject!!
  onActivate() {
    //това е по-стария начин. Новия е долу
    // this.userService.activatedEmitter.emit(true);
    //по този начин се вика събджект-а и си връщаме различен боолеан от този, който е тук
    this.userService.activatedEmitter.next(this.isActive = !this.isActive);
  }
}
