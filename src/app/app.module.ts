import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { TableComponent } from './table/table.component';
import { CurrencyCheckerPipe } from './shared/pipes/currency-checker.pipe';
import { GenderCheckerPipe } from './shared/pipes/gender-checker.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ProfileComponent,
    NavbarComponent,
    FormComponent,
    HomeComponent,
    TableComponent,
    CurrencyCheckerPipe,
    GenderCheckerPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
