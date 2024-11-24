import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientEditComponent } from 'src/Components/client-edit/client-edit.component';
import { ClientTableComponent } from 'src/Components/client-table/client-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'client-table', pathMatch: 'full' },
  { path: 'client-table', component: ClientTableComponent },
  { path: 'client-edit/:id', component: ClientEditComponent },
  { path: '**', redirectTo: 'client-table' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
