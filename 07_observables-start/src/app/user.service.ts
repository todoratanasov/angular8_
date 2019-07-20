import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from 'rxjs'
//по този начин казваме, че ще се ползва тук. Другия вариант е в аппмодул providers
@Injectable({ providedIn: 'root' })
export class UserService {
  //по този начин си създаваме евент емитер, който ще връща боолеан, когато е активиран. Слагайки декоратора означава, че можем да го инжектираме в други компоненти !!има по-добър начин да се прави това със subject!!
  //activatedEmitter = new EventEmitter<boolean>();

  //тук си създаваме събджект
  activatedEmitter = new Subject<boolean>();
}
