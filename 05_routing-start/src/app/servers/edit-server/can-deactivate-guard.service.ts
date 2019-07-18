import { Observable } from "rxjs";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

//тук ще проверяваме дали може да напусне пътя

export interface CanComponentDeactivate {
  //създаваме този метод, който
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
//това по някакъв начин прави връзка между модула, на който го закачим и метода тук използвайки интерфейси
export class CanDeactivateGuard
  implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
