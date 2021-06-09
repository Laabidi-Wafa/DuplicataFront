import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProfilComponent } from './profil/profil.component';
import { BoardAgentComponent } from './board-Agent/board-Agent.component';
import { BoardCitoyenComponent } from './board-employe/board-Citoyen.component';
import { BoardAgent3tComponent } from './board-agent3t/board-agent3t.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { LoginfirstComponent } from './loginfirst/loginfirst.component';
import { UpdateUserComponent } from './board-admin/update-user/update-user.component';
import { DetailUserComponent } from './board-admin/detail-user/detail-user.component';
import { ModifiersonprofilComponent } from './profil/modifiersonprofil/modifiersonprofil.component';
import { DetailprofilComponent } from './profil/detailprofil/detailprofil.component';
import { CompteAgent3TComponent } from './compte-Agent3T/compte-Agent3T.component';
import { BoardDemandeComponent } from './board-employe/board-demande/board-demande.component';
import { DetailDemandeComponent } from './board-agent3t/detail-demande/detail-demande.component';
import { UpdateEmployerComponent } from './board-agent3t/update-employer/update-employer.component';
import { CompteAgentComponent } from './compteAgent/compteAgent.component';
import { DemandepermisComponent } from './demandepermis/demandepermis.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
    { path: '', redirectTo: 'vehicule', pathMatch: 'full' },
    { path: 'vehicule',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'examples/landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'examples/profile',     component: ProfileComponent },
    { path: 'login',                component: LoginfirstComponent },
    { path: 'login/register' , component: InscriptionComponent },
    { path: 'register', component: InscriptionComponent },
    { path: 'Agent3t', component: BoardAgentComponent},
    { path: 'BoardCitoyen', component: BoardCitoyenComponent },
    { path: 'pro', component: BoardAgent3tComponent },
    { path: 'admin', component: BoardAdminComponent },
    { path: 'utilisateur', component: BoardAdminComponent },
    { path: 'adminuser', component: BoardAdminComponent },
    { path: 'update/:id', component: UpdateUserComponent },
    { path: 'updateEmp/:id', component: UpdateEmployerComponent  },
    { path: 'details/:id', component: DetailUserComponent},
    { path: 'admin/cp1', component: CompteAgentComponent},
    { path: 'pro/Agent', component: CompteAgent3TComponent },
    { path: 'modifier/:id', component: ModifiersonprofilComponent},
    {path: 'detailP/:id', component: DetailprofilComponent },
    {path: 'demande' , component: BoardDemandeComponent},
    {path: 'detaildemande/:value/:id', component: DetailDemandeComponent},
    {path: 'demandepermis/:value/:id',component: DemandepermisComponent},
    {path: 'profil', component:  ProfilComponent},
    {path: 'fileupload',component: UploadComponent}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
