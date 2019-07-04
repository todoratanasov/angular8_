import { Component } from "@angular/core";
@Component({
  //това тук всъщност е къстъм таг-а, който ние си правим и в който ще се рендерира html-а на компонентата
  selector: "app-root",
  //html-а, който рендерираме
  templateUrl: "./app.component.html",
  //css-а, който подаваме за тази компонента
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // всъщност това реферира към {{title}} във файла .html, който подаваме горе. Можем да се обръщаме към него с this.title и каквото и пропърти тук да сложим, ако в html-а го сложим в {{}} то ще се рендерира и всеки път когато го променяме ще се отразява промяната
  title = "my-first-app";
  name = "todor";
}
