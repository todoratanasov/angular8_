import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
//по този начин без .ts импортваме компонентата
import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers/servers.component";

@NgModule({
  declarations: [
    //тук си подаваме компонентата както я експортваме, за да може главната компонента да я ползва
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
