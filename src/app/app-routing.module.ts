import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ApplicationListComponent} from "./components/application-list/application-list.component";
import {ApplicationDetailsComponent} from "./components/application-details/application-details.component";
import {ApplicationCreateComponent} from "./components/application-create/application-create.component";

const routes: Routes = [
  {path: '', redirectTo: 'applications', pathMatch: 'full'},
  {path: 'applications', component: ApplicationListComponent},
  {path: 'applications/:id', component: ApplicationDetailsComponent},
  {path: 'create', component: ApplicationCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
