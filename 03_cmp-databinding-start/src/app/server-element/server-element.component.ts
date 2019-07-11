import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy
} from "@angular/core";
import { Content } from "@angular/compiler/src/render3/r3_ast";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
}) //когато искаме да ползваме различните lifecickle hooks трябва да ги добавим тук implements OnInit, OnChange ect.
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy {
  // този обект тук от този компонент с пропърти байндинг го подаваме в таг-а на компонента където се ползва. В този случай в html-а на app-component като, за да е видимо това пропърти от парент елемента в случая трябва да сложим @Input() отпред (Това се нарича декоратор като трябва да бъде импортнат горе) и попълвайки пропъртито element тук вече html-а на този компонент си се рендерира използвайки стойностите
  @Input() element: { type: string; name: string; content: string };
  //конструктора винаги се изпълнява първи
  constructor() {}
  //това се изпълнява второ и само то приема аргумент - този, който съдържа интересни неща като стойността сега, локалните променливи на елемента и предишната му стойност!!
  ngOnChanges(changes: SimpleChanges) {}
  //това се изпълнява трето
  ngOnInit() {}

  //това се изпълнява при всяка промяна (цъкане на бутон и доста други)
  ngDoCheck() {}
  //този е следващия и се вика само и единствено веднъж
  ngAfterContentInit() {}
  //след всяка промяна се вика
  ngAfterContentChecked() {}
  //последен след като компонента бъде унищожен
  ngOnDestroy() {}
}
