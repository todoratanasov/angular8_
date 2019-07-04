// tslint:disable-next-line: comment-format
//импортваме си Component
import { Component } from '@angular/core';
// експортваме класа
// tslint:disable-next-line: comment-format
//слагайки този декоратор директно над класа с @Component казваме, че класа вече е компонент
@Component({
  // казваме името на таг-а, в който ще се рендерира съдържанието на тази компонента като го добавим в парент  компонента му
  styles:[`
    .online{
      color:white;
    }
  `],
  selector: "app-server",
  // selector:".app-server", //можем да си направим селектора и така, като тогава просто ще си сложим някакъв   елемент с клас .app-server вместо къстъм таг и така пак ще си работи
  // добавяме си html-a
  templateUrl: './server.component.html',
  //така си подаваме дефолтен css  в случая класове
  // styles:[
  //   `{.it-is{color:white;}}`,
  //   `{
  //     .online{
  //       color:white;
  //     }
  //   }`
  // ]
})
export class ServerComponent {
  constructor(){
    //в конструктора си задаваме стойност на serverStatus
    this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
  }
  
  serverId = 10;
  serverStatus = '';
  // така си декларираме метод
  getServerStatus() {
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus === 'online'?'green':'red';
  }
}
