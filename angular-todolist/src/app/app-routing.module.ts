import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
// add components
import { TodosComponent } from './components/todos/todos.component';  
import { AboutComponent } from './components/pages/about/about.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  { path: '', component: TodosComponent,canActivate:[AuthGuard]},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
