import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerCreateComponent } from './components/views/player-create/player-create.component';
import { HomeComponent } from './components/views/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'player', component: PlayerCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
