import { Component, OnInit,EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  //тук си създаваме двете променливи(наши си евенти), които ще ни активират методите в app.component.html методите като ги правим EventEmitter-и (трябва да бъде импортнат) и в <> подаваме какво точно ще емитваме. В случая обект, който другия компонент ще очаква (app.vomponent) като за целта emit-ваме тези неща в метода долу. Отново слагаме декоратор, но този път @Output() защото всъщност ще изнасяме нещо от компонента
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent:string}>();

  newServerName = "";
  newServerContent = "";
  constructor() {}
// тук след като сме казали горе, че ще направим serverCreated евент  си го емитваме като му подаваме стойностите, които ще носи със себе си и ще предава, а именно обект, койт държи двете пропъртита тук, които ще променяме през html-а с инпутите. Тук викайки тези два метода това, което те правят, е че създават и тригърват евентите горе, които аутпутваме и вече може да се слуша за тях!!!!
  onAddServer() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  }
  ngOnInit() {}
}
