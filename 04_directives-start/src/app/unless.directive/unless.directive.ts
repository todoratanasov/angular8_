import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]"
})
export class UnlessDirective {
  //слагайки set отпред правим unless метод, който получава стойност някаква
  //по този начин направихме сами структурна директива, която е обратното на ngIf и виж как я ползвам в app.component.html като подаваме същото име там като това, което сетваме
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  //ту подавайки templateRef всъщност е какво ще слагаме, а второто е къде
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
