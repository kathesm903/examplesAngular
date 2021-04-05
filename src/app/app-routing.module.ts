import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { SumaComponent } from './suma/suma.component';

const routes: Routes = [
    {
      path: '', component: MenuComponent,  pathMatch: 'full'
    },
    {
      path: 'inicio', component: InicioComponent,  pathMatch: 'full'
    },
    {
      path: 'main', component: MainComponent, pathMatch: 'full'
    },
    {
      path: 'suma', component: SumaComponent,  children:
      [
        {path: ':id', component: SumaComponent}
      ]
  },
  ];
@NgModule({
    imports: [
      RouterModule.forRoot(routes, { useHash: true, enableTracing: false, relativeLinkResolution: 'legacy' }),
    ],
    exports: [RouterModule],
  })
  export class AppRoutingModule { }