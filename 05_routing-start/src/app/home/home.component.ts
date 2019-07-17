import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  //за да ползваме програмирано прехвърляне между path-овете трябва да си инжектираме router-a
  constructor(private router: Router, private authService: AuthService) {}

  onLoadServers() {
    //примерно пращаме нещо към бекенда и в зависимост от това какъв отговор се върне искаме да навигираме към друг компонент(path), който го подаваме като масив на този метод
    this.router.navigate(["/servers"]);
  }
  //по този начин си програмираме, че когато се цъкне на бутона в компонента ще създадем този path, но този път подавайки и id като параметър и query или иначе казано url-а ще бъде /servers/1/edit?allowEdit=1#loading
  onLoadServer(id: number) {
    this.router.navigate(["/servers", id, "edit"], {
      queryParams: { allowEdit: "1" },
      fragment: "loading"
    });
  }
  ngOnInit() {}
  onLogin() {
    this.authService.login();
  }
  onLogout() {
    this.authService.logout();
  }
}
