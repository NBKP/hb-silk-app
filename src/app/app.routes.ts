import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SilkProduct } from './silk-product/silk-product';
import { SilkDesign } from './silk-design/silk-design';



export const routes: Routes = [
{ path: '', redirectTo: 'design', pathMatch: 'full' },
{ path: 'design', component: SilkDesign },
{ path: 'products/:id', component: SilkProduct }
];


@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}