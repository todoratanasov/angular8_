export class LoggingService {
  //за да се ползва service се инджектва в компонента. Виж в конструктора на някоя компонента
  logStatusChange(status: string) {
    console.log("A server status changed, new status: " + status);
  }
}
