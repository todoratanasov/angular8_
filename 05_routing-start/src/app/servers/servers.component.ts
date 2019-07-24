import { Component, OnInit } from "@angular/core";
import { ServersService } from "./servers.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  public servers: { id: number; name: string; status: string }[] = [];
  //добавяйки ActivatedRoute в конструктора просто казва на компонента, кой е в момента активния раут
  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  //ако не сложим / пред servers по този начин няма да получим грешка (това се прави, ако искаме да имаме няколко пътя след servers/servers примерно), това можем да го променим като инжектираме под route активния раут и подадем опции на navigate и в общи линии тук си дефинираме примерно /servers/addserver , като addserver го подаваме на navigate заедно с другите опции
  onReload() {
    //this.router.navigate(['servers'],{relativeTo: this. route})
  }
}
