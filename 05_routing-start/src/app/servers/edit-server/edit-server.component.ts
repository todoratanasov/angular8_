import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { ServersService } from "../servers.service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"]
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;
  //за да достъпим query инфото в url-a и fragmenta ни трябва да си инжектираме activatedroute
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //единят начин да си достъпим параметрите и фрагмента е да ползваме snapshot, това е само, ако ще ползваме само веднъж на този компонент тези данни
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    //това е по-правлният начин с обзървабъл
    this.route.queryParams.subscribe(
      (queryParams: Params)=>{
        this.allowEdit = queryParams['allowEdit']==='1'? true : false
      }
    );
    this.route.fragment.subscribe();

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
  }
}
