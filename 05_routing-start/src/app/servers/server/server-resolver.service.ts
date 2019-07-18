import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

//този сървис взсъщност може да се ползва, за фечване на някакви данни и подавайки ги ня компонентата преди да се е заредил компонента

interface Server{
  id: number;
  name: string;
  status: string;
}
@Injectable()
export class ServerResolver implements Resolve<Server>{

  constructor(private serversService: ServersService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server>|Promise<Server>|Server{
    return this.serversService.getServer(+route.params['id']);
  }
}
