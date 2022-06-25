import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { JornadaComponent } from './pages/jornada/jornada.component';
import { TipoJornadaComponent } from './pages/tipo-jornada/tipo-jornada.component';

const routes: Routes = [
  { path: '', component: EmpleadoComponent},
  { path: 'tipo-jornada', component: TipoJornadaComponent},
  { path: 'jornada', component: JornadaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
