import { Directive, ElementRef, OnInit } from "@angular/core";
//за да стане директива трябва да се сложи тази анотация и горе да се импортне и отделно трябва да я добавим в app.module както е показано там
//слагайки селектора в [] след това просто си го добавяме в таг-а на елемента без [] и си го ползваме
@Directive({
  selector: "[appBasicHighlight]"
})
export class BasicHighlightDirective implements OnInit {
  //за да инджектнем друг компонент това става в констриктора като пишем това в скобите и името си зависи от нас
  constructor(private elementRef: ElementRef) {}
  //това, което се случва, е че по този начин с конструктора хващаме елемента, в който поставим тази директива (заради ElementRef)и можем да си ползваме onInit, за да променяме елемента по начина долу (в случая директно сменяме бекграунда)
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = "green";
  }
}
