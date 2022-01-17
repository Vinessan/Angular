import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PO-UI
import { PoFieldModule } from '@po-ui/ng-components';
import { PoModule } from '@po-ui/ng-components';
import { PoTemplatesModule } from '@po-ui/ng-templates';

// PRIME NG
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { HomeComponent } from './home/home.component';
import { RoutingComponent } from './routing/routing.component';

@NgModule({
  declarations: [AppComponent, FormComponent, HomeComponent, RoutingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // PO-UI
    PoModule,
    PoFieldModule,
    PoTemplatesModule,

    // PRIME NG
    ButtonModule,
    AccordionModule,

    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
