/* The above code is importing the BrowserModule from the 
@angular/platform-browser package. */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { GithubService } from './services/github.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component'; 

/* NgModule is a decorator function that takes a single metadata object whose properties 
describe the module. The most important properties are: */
/* A. Declarations are the components that are part of the current module. */
/* B.  Imports are the modules that are needed for the application. */
/* C. Declarations are Telling Angular that we want to use a specific service in our application. */
@NgModule({


  declarations: [
    AppComponent,
    UserComponent,
    NotFoundComponent,
    HomeComponent
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  providers: [GithubService],
  
  bootstrap: [AppComponent]
})
/* Exporting the AppModule class so that it can be imported in other modules. */
export class AppModule { }
