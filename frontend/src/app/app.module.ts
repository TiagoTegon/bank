import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { TitleComponent } from './components/partials/title/title.component';
import { ListComponent } from './components/pages/list/list.component';
import { SearchComponent } from './components/partials/search/search.component';
import { AccountComponent } from './components/pages/account/account.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    TitleComponent,
    ListComponent,
    SearchComponent,
    AccountComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
