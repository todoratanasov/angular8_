//импортваме си Component
import {Component} from '@angular/core';
//експортваме класа
//слагайки този декоратор директно над класа с @Component казваме, че класа вече е компонент
@Component({
    //казваме името на таг-а, в който ще се рендерира съдържанието на тази компонента като го добавим в парент компонента му
    selector:"app-server",
    //selector:".app-server", //можем да си направим селектора и така, като тогава просто ще си сложим някакъв елемент с клас .app-server вместо къстъм таг и така пак ще си работи
    //добавяме си html-a
    templateUrl: "./server.component.html"
})
export class ServerComponent{
serverId = 10;
serverStatus = "offline";
//така си декларираме метод
getServerStatus(){
    return this.serverStatus;
}
}