import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerCreateComponent } from './components/views/player-create/player-create.component';


const routes: Routes = [
  {path: 'player', component: PlayerCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
