import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
//това са анотации
@NgModule({
  //тук подаваме child компонентите (които горе си импортваме)
  declarations: [AppComponent],
  //подавайки тук FormsModule можем да ползваме примерно ngModel
  imports: [BrowserModule, FormsModule],
  providers: [],
  //тук подаваме кои компоненти ще се заредят когато се зареди тази компонента
  bootstrap: [AppComponent]
})
//този AppModule е това, което angular ще зареди
export class AppModule {}
