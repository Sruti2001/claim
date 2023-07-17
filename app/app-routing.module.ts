import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimformComponent } from './claimform/claimform.component';
import { ClaimlistComponent } from './claimlist/claimlist.component';
import { ProcessclaimComponent } from './processclaim/processclaim.component';

const routes: Routes = [

  {
    path: 'claimform',
    component: ClaimformComponent
  },
  {
    path: 'claimlist',
    component: ClaimlistComponent
  },
  {
    path: 'processclaim',
    component: ProcessclaimComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }