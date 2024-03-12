import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './TopNav/nav-bar/nav-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StudentsListComponent } from './Students/students-view/students-list/students-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentuiComponent } from './ViewStudent/studentui/studentui.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCommonModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MomentDateAdapter } from '@angular/material-moment-adapter'; // Import MomentDateAdapter
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment'; // Import moment.js or use the way you import moment in your project
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

// import { DateAdapter,MAT_DATE_LOCALE } from '@angular/material/core';
// import { MatMomentDateModule } from '@angular/material-moment-adapter'; // If you're using Moment.js

// Import other date adapters if needed


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StudentsListComponent,
    StudentuiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule ,// MatIconModule should be added to imports, not declarations
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCommonModule,
    MatSelectModule,
    MatSnackBarModule,
    MatNativeDateModule,
    MatMomentDateModule,
    CommonModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_DATE_FORMATS, useValue: {
        parse: {
            dateInput: 'YYYY-MM-DD',
        },
        display: {
            dateInput: 'YYYY-MM-DD',
            monthYearLabel: 'MMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
        },
    }},
    { provide: MAT_DATE_LOCALE, useValue: 'your-locale' } // set the locale if needed
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

