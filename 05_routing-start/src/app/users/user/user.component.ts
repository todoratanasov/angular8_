import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  //създаваме си обект, в който после ще нанесем параметрите от url параметъра
  user: { id: number; name: string };
  //за да можем да си вземем от url-а параметрите си инжектираме ActivatedRoute
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //по този начин си взимаме параметъра, който сме си дефинирали в url-а в appcomponent-a (в случая id и name)
    this.user = {
      id: this.route.snapshot.params["id"],
      name: this.route.snapshot.params["name"]
    };
    //за да може всеки път когато се достъпи този раут да сме с актуални параметри трябва да се закачим за обзървабъл и в случая това, което става, е че закачаме на params - Params(което си е държавен обект) и тук в onInit си му казваме всеки път да слуша за промени, като subscribe приема параметри функции
    this.route.params.subscribe((params: Params) => {
      this.user.id = params["id"];
      this.user.name = params["name"];
    });
  }
}
