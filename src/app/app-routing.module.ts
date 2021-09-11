import { ShipComponent } from './ship/ship.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent } from './pages/canvas/canvas.component';
const routes: Routes = [
  { path: 'canvas', component: CanvasComponent },
  { path: '', redirectTo: '/canvas', pathMatch: 'full' },
  { path: '**', redirectTo: 'canvas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
