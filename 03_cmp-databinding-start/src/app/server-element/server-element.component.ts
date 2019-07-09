import { Component, OnInit, Input } from "@angular/core";
import { Content } from "@angular/compiler/src/render3/r3_ast";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent implements OnInit {
  // този обект тук от този компонент с пропърти байндинг го подаваме в таг-а на компонента където се ползва. В този случай в html-а на app-component като, за да е видимо това пропърти от парент елемента в случая трябва да сложим @Input() отпред (Това се нарича декоратор като трябва да бъде импортнат горе) и попълвайки пропъртито element тук вече html-а на този компонент си се рендерира използвайки стойностите
  @Input() element: { type: string; name: string; content: string };
  constructor() {}

  ngOnInit() {}
}
