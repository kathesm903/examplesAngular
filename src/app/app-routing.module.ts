import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { MenuComponent } from './menu/menu.component'
import { SumaComponent } from './suma/suma.component';

const routes: Routes = [
    { 
        path: '', component: MenuComponent,  pathMatch: 'full'
    },
    {
        path: 'suma', component: SumaComponent, pathMatch: 'full'
    }
  ];
  @NgModule({
    imports: [
      RouterModule.forRoot(routes, { useHash: true, enableTracing: false, relativeLinkResolution: 'legacy' }),
    ],
    exports: [RouterModule],
  })
  export class AppRoutingModule { }