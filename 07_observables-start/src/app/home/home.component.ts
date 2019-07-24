import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs'
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  //правим си една променлива от тип Subscription, на която ще задаваме обзървара, за да може после да се unsubsrcib-нем
  private firstObsSubscription: Subscription;
  ngOnInit() {
    //така си създаваме нов обзървабъл, като си му даваме име. Получава observer, който има next() - когато получава данни, error за грешка и finaly (май). Солу се закачаме за този обзървабъл и когато получим данни нещо си се случва с тях
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          //с това ние сами си прекратяваме обзървъра
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error("count is greater"))
        }
        count++;
      }, 1000)
    });
    //Оператори:
    //в случая импортвам си го, подавам го на pipe, map прави нещо с информацията, която ще прати обзървабъла и я ретърнва (това не се ползва така, а цялото се подава преди обзървъра. Виж 10реда по-долу)
    customIntervalObservable.pipe(map((data) => {
      return data;
    }))
    //когато имаме обзървър по този начин подаваме колбеци. Първия получава данните, втория получава грешката (нещо като try cath finaly блок). Третия колбек не получава аргумент, и се изпълнява когато обсървабъла се комплийтне
    this.firstObsSubscription = customIntervalObservable
      .pipe(map((data) => {
        return data;
      }))
      .subscribe(
        data => {
          console.log(data)
        },
        error => { console.log(error) },
        () => {
          console.log("Completed")
        })
  }
  ngOnDestroy() {
    //тук си се откачаме от обсървъра, за да не продължава форевър
    this.firstObsSubscription.unsubscribe();
  }
}
