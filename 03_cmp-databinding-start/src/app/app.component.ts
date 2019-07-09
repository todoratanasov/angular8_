import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  serverElements = [];
  //тук в скобите реално ще получим информацията от компонента, който е нестнат в този компонент когато от нестнатия компонент извикаме функцията onServerAdded($event), като това, което ще подадем тук в скобите всъщност с EventEmitter-а ще го подадем от другия компонент
  onServerAdded(serverData:{serverName: string, serverContent:string}) {
    //записвайки това, което получаваме от другия компонент в пропъртито тук serverElements вече спокойно си го подаваме в този html, но там вече го присвояваме пък на друго пропърти
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName: string, serverContent:string) {
    this.serverElements.push({
      type: "blueprint",
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
}
