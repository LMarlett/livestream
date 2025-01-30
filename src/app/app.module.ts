import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppBoostrapModule } from './app-bootstrap/app-boostrap.module';


// Page component imports
 import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';
 import { AppComponent } from './app.component';
import { LivestreamComponent } from './livestream/livestream.component';

@NgModule({
  declarations: [
    AppComponent,
    LivestreamComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // declaration for contact form environment
    AppBoostrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
