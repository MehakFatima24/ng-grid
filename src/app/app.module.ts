import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { GridService } from './services/grid/grid.service';
import { HttpService } from './services/http/http.service';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
@NgModule({
  declarations: [AppComponent, PostComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSnackBarModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [GridService, HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
