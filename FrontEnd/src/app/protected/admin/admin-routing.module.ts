import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotasAdminComponent } from './notas-admin/notas-admin.component';
import { AdministracionUsuariosComponent } from './administracion-usuarios/administracion-usuarios.component';

const routes: Routes = [
  {
    path: 'notasAdmin', component: NotasAdminComponent
  },
  {
    path:'administracionUsuarios', component: AdministracionUsuariosComponent
  },
  { //Se agrega esta ruta para que funcione el routerLink de la barra de arriba
    path: '',
    pathMatch: 'full',
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
