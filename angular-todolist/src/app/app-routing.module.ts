import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// add
import { TodosComponent } from './components/todos/todos.component';  
import { AboutComponent } from './components/pages/about/about.component';
import { ErrorComponent } from './components/pages/error/error.component';

const routes: Routes = [
  { path: '', component: TodosComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
