import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddDepComponentComponent } from './add-dep-component/add-dep-component.component';
import { ListDepComponentComponent } from './list-dep-component/list-dep-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { UpdateDepComponent } from './update-dep/update-dep.component';
import { DeleteDepComponent } from './delete-dep/delete-dep.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDepComponentComponent,
    ListDepComponentComponent,
    NotFoundComponent,
    LoginComponent,
    UpdateDepComponent,
    DeleteDepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
