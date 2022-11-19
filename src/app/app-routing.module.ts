import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableOfExercisesComponent } from './table-of-exercises/table-of-exercises.component';

const routes: Routes = [
  { path: 'oLxBG9ki.html', component: TableOfExercisesComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
