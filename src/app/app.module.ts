import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompTestComponent } from './comp-test/comp-test.component';
import { FormsModule } from '@angular/forms';
import { AppareilService} from './services/appareil.service';

@NgModule({
  declarations: [
    AppComponent,
    CompTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
