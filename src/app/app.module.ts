import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { HttpErrorHandler } from './services/http-error-handler/http-error-handler.service';
import { MessageService } from './services/message/message.service';
import { AccordionModule } from 'primeng/accordion';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    BrowserAnimationsModule,
    PasswordModule,
    FormsModule,
    ToastModule,
    RippleModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AccordionModule
  ],
  providers: [
    HttpErrorHandler,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
