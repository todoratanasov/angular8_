import { Component } from "@angular/core";
import { LoggingService } from "../logging/logging.service";
import { AccountsService } from "../account-service/account.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  providers: [LoggingService, AccountsService] //това е другата стъпка, която трябва да направим, за да ползваме service подаваме името на класа
})
export class NewAccountComponent {
  //така се инджектва service като името си го избираме, но типа трябва да е името на класа, под което е създадена service и се импортва
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountsService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccout(accountName, accountStatus);
    //тук при активирането на този метод си ползваме директно услугата
    this.loggingService.logStatusChange(accountStatus);
  }
}
