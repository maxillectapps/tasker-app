import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/widgets/to-do-list/to-do-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from './components/widgets/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ToDoWidgetComponent } from './components/widgets/to-do-widget/to-do-widget.component';
import { AlertOnlyContentComponent } from './components/content-types/alert-only-content/alert-only-content.component';
import { HasFileContentComponent } from './components/content-types/has-file-content/has-file-content.component';
import { NeedAcceptanceContentComponent } from './components/content-types/need-acceptance-content/need-acceptance-content.component';
import { ToDoHeaderComponent } from './components/widgets/to-do-header/to-do-header.component';
import { ToDoImageWidgetComponent } from './components/widgets/to-do-image-widget/to-do-image-widget.component';
import { ToDoFileWidgetComponent } from './components/widgets/to-do-file-widget/to-do-file-widget.component';
import { ToDoAcceptanceWidgetComponent } from './components/widgets/to-do-acceptance-widget/to-do-acceptance-widget.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    NavbarComponent,
    ToDoWidgetComponent,
    AlertOnlyContentComponent,
    HasFileContentComponent,
    NeedAcceptanceContentComponent,
    ToDoHeaderComponent,
    ToDoImageWidgetComponent,
    ToDoFileWidgetComponent,
    ToDoAcceptanceWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
