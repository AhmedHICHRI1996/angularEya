import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepComponentComponent } from './add-dep-component/add-dep-component.component';
import { ListDepComponentComponent } from './list-dep-component/list-dep-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { UpdateDepComponent } from './update-dep/update-dep.component';
import { DeleteDepComponent } from './delete-dep/delete-dep.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  
  {path:'adddep',component:AddDepComponentComponent},
  {path:'list',component:ListDepComponentComponent},
  {path:'update/:id',component:UpdateDepComponent},
  {path:'delete/:id',component:DeleteDepComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
