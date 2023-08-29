import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule, HttpClient } from '@angular/common/http';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { MessagesModule } from 'primeng/messages';
import { HttpErrorHandler } from './services/http-error-handler/http-error-handler.service';
import { MessageService } from './services/message/message.service';
import { AccordionModule } from 'primeng/accordion';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TabViewModule } from 'primeng/tabview';
import { MusicComponent } from './modules/music/components/music/music.component';
import { ArtHomeComponent } from './modules/art/components/art-home/art-home.component';
import { DashboardHomeComponent } from './modules/dashboard/components/dashboard-home/dashboard-home.component';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SignupComponent } from './components/forms/signup/signup.component';
import { SigninComponent } from './components/forms/signin/signin.component';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HeaderComponent,
    BodyComponent,
    HomeComponent,
    MusicComponent,
    ArtHomeComponent,
    DashboardHomeComponent,
    SignupComponent,
    SigninComponent
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
    AccordionModule,
    BreadcrumbModule,
    CardModule,
    DividerModule,
    HttpClientModule,
    MessagesModule,
    TabViewModule,
    ReactiveFormsModule,
    BadgeModule,
    TooltipModule,
    TableModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    HttpErrorHandler,
    MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
