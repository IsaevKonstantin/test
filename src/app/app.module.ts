import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HeaderService } from './services/header.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations: [AppComponent, HeaderComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MenuModule,
        FormsModule,
        ButtonModule,
        HttpClientModule,
        ToastModule,
    ],
    providers: [HeaderService],
    bootstrap: [AppComponent],
})
export class AppModule {}
