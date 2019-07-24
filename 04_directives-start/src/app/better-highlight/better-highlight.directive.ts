import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";
import { NgModuleResolver } from "@angular/compiler";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  //така си добавяме пропърти, което ще достъпваме он нкъде другаде и ще променяме как работи виж в html-a
  @Input() defaultColor: string = "transparent";
  //слагайки в скобите някакво име (alias) (не е задължително) можем да ползваме директивата с alias-а, но в скоби[appBetterHighlight] 
  //@Input("appBetterHighlight") highlightColor: string = "blue";
  @Input() highlightColor: string = "blue";
  //по този начин се закачаме директно за някое пропърти и му слагаме стойността в случая backgroundColor и му подаваме променливата, която ще достъпваме отвън като дефолтна стойност
  @HostBinding("style.backgroundColor") backgroundColor: string;
  //подавайки тук в констриктора ElementRef направо си взимаме елемента, в който ще поставим директивата и почваме да си го обработваме подавайки го на другия метод renderer
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}
  ngOnInit() {
    //по този начин след като ни се ининтне компонента си слагаме дефолтна стойност
    this.backgroundColor = this.defaultColor;
    //след this.renderer. има доста методи, които е добре да разгледам като всеки метод си иска различни аргументи, но тук в случая първо е самия елемент
    // this.renderer.setStyle(this.elRef.nativeElement, "background", "blue");
  }
  //по този начин си закачаме и улавяме някакви евенти в случая слагаме този декоратор и слушаме за минаване на мишката през елемента, на който сложим тази директива слагайки самия евент в кавичките (можем да си слушаме за всички възможни евенти) като можем и да си ползваме евента подавайки го на метода
  @HostListener("mouseenter") mouseover(eventData: Event) {
    //това ще смени цвета когато мишката навлезне в елемента
    this.renderer.setStyle(this.elRef.nativeElement, "background", "blue");
    //това тук е допълнително и работи за @HostBinding
    this.backgroundColor = this.highlightColor;
  }
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    //това ще смени цвета когато мишката излезне от елемента
    this.renderer.setStyle(this.elRef.nativeElement, "background", "red");
    //това тук е допълнително и работи за @HostBinding
    this.backgroundColor = "red";
  }
}
