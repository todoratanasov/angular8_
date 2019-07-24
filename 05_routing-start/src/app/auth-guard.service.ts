//това е сървиз, който ще проверява дали даден път е allowed да се достъпва (това е фейк автентикация)
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable() //CanActivate, CanActivateChild съответно ще действат върху пътя и върху децата на пътя
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  //след параметрите на метода с : се отделя това, което ще връща метода. като в C#
  //цялото това нещо ползва service, който връща промис, ако има аутентикация и canActivate също връща boolean или промис или обзървабъл. В случая е boolean като я ползваме като middleware в raut-вете ни в app-routing.module
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((authenticated: boolean) => {
      if (authenticated) {
        return true;
      } else {
        this.router.navigate(["/"]);
      }
    });
  }
  //използвайки гард-а за децата на раут-а просто в него връщаме това, което връща гарда за самия раут (за по-лесно)
  CanActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
