import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ServersService } from "../servers.service";
import { CanComponentDeactivate } from "./can-deactivate-guard.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"]
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;
  changesSaved = false;
  //за да достъпим query инфото в url-a и fragmenta ни трябва да си инжектираме activatedroute
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private routrer: Router
  ) {}

  ngOnInit() {
    //единят начин да си достъпим параметрите и фрагмента е да ползваме snapshot, това е само, ако ще ползваме само веднъж на този компонент тези данни
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    //това е по-правлният начин с обзървабъл
    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams["allowEdit"] === "1" ? true : false;
    });
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    //
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });

    this.changesSaved = true;
    //по този начин след като упдейтнем сървъра ще ни навигира един път по-нагоре
    this.routrer.navigate(["../"], { relativeTo: this.route });
  }
  //по този начин, след като сме вкарали горе след името на класа интерфейса, викаме метода тук, който ще преценява дали може да се напусне страницата
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.allowEdit) {
      return true;
    }
    //тук си правим проверка дали някое от тези неща, е променено и дали промените са запазени
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm("Do you want to discard changes");
    } else {
      return true;
    }
  }
}
