import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule  , HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginfirstComponent } from './loginfirst/loginfirst.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfilComponent } from './profil/profil.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardAgentComponent } from './board-Agent/board-Agent.component';
import { BoardCitoyenComponent} from './board-employe/board-Citoyen.component';
import { DetailUserComponent } from './board-admin/detail-user/detail-user.component';
import { UpdateUserComponent } from './board-admin/update-user/update-user.component';
import { DetailprofilComponent } from './profil/detailprofil/detailprofil.component';
import { ModifiersonprofilComponent } from './profil/modifiersonprofil/modifiersonprofil.component';
import { CompteAgent3TComponent } from './compte-Agent3T/compte-Agent3T.component';
import { CompteAgentComponent } from './compteAgent/compteAgent.component';
import { authInterceptorProviders } from './_helpers/AuthInterceptor.helpers';
import { BoardDemandeComponent } from './board-employe/board-demande/board-demande.component';
import { DetailDemandeComponent } from './board-agent3t/detail-demande/detail-demande.component';
import { UpdateEmployerComponent } from './board-agent3t/update-employer/update-employer.component';
import { DataService } from './_services/data.service';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { DetailsfileComponent} from './detailsfile/detailsfile.component';
import { UploadComponent } from './upload/upload.component';
import { DemandepermisComponent } from './demandepermis/demandepermis.component';
import { BoardAgent3tComponent } from './board-agent3t/board-agent3t.component';


@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginfirstComponent,
        InscriptionComponent,
        ProfilComponent,
        BoardAdminComponent,
        BoardAgentComponent,
        BoardAgent3tComponent,
        BoardCitoyenComponent,
        DetailUserComponent,
        UpdateUserComponent,
        DetailprofilComponent,
        ModifiersonprofilComponent,
        CompteAgent3TComponent,
        CompteAgentComponent,
        BoardDemandeComponent,
        DetailDemandeComponent,
        UpdateEmployerComponent,
        UploadFileComponent,
        DetailsfileComponent,
        UploadComponent,
        DemandepermisComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        ReactiveFormsModule,
        FullCalendarModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule,
        BrowserModule,
        HttpClientModule,
        ChartsModule,
          CommonModule,
          FormsModule,
          NgbModalModule,
          FlatpickrModule.forRoot(),
          CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
          }),
    ],
    providers: [authInterceptorProviders , DataService],
    bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
