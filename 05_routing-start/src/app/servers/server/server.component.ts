import { Component, OnInit } from "@angular/core";

import { ServersService } from "../servers.service";
import { ActivatedRoute, Router, Data } from "@angular/router";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //взимам си id-to от пътя и го подавам на service-то (правейки го number с плюса)
    //закоментирам го защото ще ползваме друг начин на достъпване на данните със сървиз
    // const id = +this.route.snapshot.params["id"];
    // this.server = this.serversService.getServer(id);
    //по този начин си достъпваме това, кеото има на server в route component-а
    this.route.data.subscribe((data: Data) => {
      this.server = data["server"];
    });
  }
  onEdit() {
    //по този начин с {relativeTo: this.route} ще навигира до настоящият раут и ще добави edit
    //добавяйки queryParamsHandling: 'preserve'} ще запази старите query параметри в новия раут
    this.router.navigate([
      "edit",
      { relativeTo: this.route, queryParamsHandling: "preserve" }
    ]);
  }
}
