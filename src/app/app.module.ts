import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './pages/empleado/empleado.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';

import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './components/table/table.component';
import { CommonModule, DatePipe } from '@angular/common';
import { TipoJornadaComponent } from './pages/tipo-jornada/tipo-jornada.component';
import { JornadaComponent } from './pages/jornada/jornada.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SearchComponent } from './components/search/search.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';

export const DATE_FORMAT = {
  parse: {
      dateInput: 'DD-MM-YYYY',
  },
  display: {
      dateInput: 'DD-MM-YYYY',
      
  },
};

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    NavBarComponent,
    FormComponent,
    TableComponent,
    TipoJornadaComponent,
    JornadaComponent,
    SearchComponent,
    ModalComponent
  ],
  entryComponents: [ModalComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatTableModule,
    MatSnackBarModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatMomentDateModule,
    NgxMatTimepickerModule,
    MatDialogModule
  ],
  providers: [
    DatePipe,
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
