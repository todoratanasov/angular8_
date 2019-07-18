import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersService } from "./servers/servers.service";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";

//тук си дефинираме масив от пътищата
const appRoutes: Routes = [
  //това е целия път, когато го достигнем отиваме на component:
  //на 4-ти ред подавам на съществуващ раут друг компонент и му подавам параметри!!
  //на 5-ти ред подавам параметри и също така още един раут след това
  { path: "", component: HomeComponent },
  { path: "users", component: UsersComponent },
  //по този начин със servers се прави нестед раутинг като махаме в children от url-а servers защото то си се добавя и се рендерират на различно място. Виж serverscomponent.html
  //canActivate:[AuthGuard] добавяйки този сървиз в раута действа като middleware, който връща boolean и ако е false няма да продължи към рендериране на компонента или, за да сме още по-тарикати добавяме canActivateChild:[AuthGuard] като в самия гард се вижда, че ползваме и двете и така ще пази хем самия раут, хем децата на този раут
  {
    path: "servers",
    //canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      {
        path: ":id/edit",
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      //след като се изпълни ServerResolver това, което върне ще бъде закачено на server и вече в компонентата можем да си ползваме инфото
      {
        path: ":id",
        component: ServerComponent,
        resolve: { server: ServerResolver }
      }
    ]
  },
  { path: "users/:id/:name", component: UserComponent },
  // { path: "not-found", component: PageNotFoundComponent }, закоментирам го защото вместо него ще се ползва отделен компонент, в който ще наливаме съобщенията за грешка
  //добавяйки data:{message: 'Page not found!'} можем да си преизползваме примерно този компонент като всеки път му подаваме различна статична data и вече неговия компонент си я взима и прави каквото трябва с нея
  {
    path: "not-found",
    component: ErrorPageComponent,
    data: { message: "Page not found!" }
  },
  //това е начина да редиректнем към даден раут като ** когато са накрая обират всички пътища. които не са матчнати горе
  { path: "**", redirectTo: "/not-found" }
  // { path: "servers/:id/edit", component: EditServerComponent },
  // { path: "servers/:id", component: ServerComponent }
];
@NgModule({
  //{useHash:true} това е много важно когато се деплойва защото по този начин ще кажем на истинския сървър, че искаме да игнорира всичко след #-га, а не да се опитва всеки път да ни потърси целия път защото винаги ще връща 404
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  //след като сме си импортнали RouterModule, зкачили сме му всичките пътища просто го експортваме, за да може в app.module да си го ползваме и така кода остава доста по-чист
  exports: [RouterModule]
})
export class AppRoutingModule {}
