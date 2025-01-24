import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPageComponent } from './card-page/card-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardContentComponent } from './card-content/card-content.component';
import { OptionButtonComponent } from './option-button/option-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPageComponent,
    HeaderComponent,
    FooterComponent,
    CardContentComponent,
    OptionButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
