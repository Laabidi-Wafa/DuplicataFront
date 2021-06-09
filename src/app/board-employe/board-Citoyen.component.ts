import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/_services/user.service';
import { TokenStorageService } from 'app/_services/token-storage.service';
import { DemandeService } from 'app/_services/demande.service';
import { Demande } from './Demande';
import { Observable } from 'rxjs';
import { ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput , Calendar  } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Demandecartegrise } from './board-demande/demandecartegrise';
import { Demandepermis } from './board-demande/demandepermis';
import { AuthService } from 'app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-Citoyen.',
  templateUrl: './board-Citoyen.component.html',
  styleUrls: ['./board-Citoyen.component.css']
})
export class BoardCitoyenComponent implements OnInit {
  content = '';
  currentEmploye: any;
  demande: Observable <Demandecartegrise[]>;
  demf: Observable <Demandepermis[]>;
  id_terrain: number;
  pagesize = 2;
  page = 1;
  datasize: any;
  lj: any;
  employerID: any;

  constructor(private userService: UserService , private token: TokenStorageService,
    private router: Router , private demandeservise: DemandeService ,
     private auth: AuthService) { }

  reloadData() {
    this.demande = this.demandeservise.getMesDemandes();
  }
  reloadfishe() {
    this.demf = this.demandeservise.getMesDemandesf();
  }
  ngOnInit() {
    this.userService.getEmployeBoard().subscribe(
      data => {
        this.content = data;
        this.currentEmploye = this.token.getUser();
        console.log(this.content);
        },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.affId();
    this.reloadData();
  }
  Deleteuser(id: number) {
    this.userService.deleteuser(id)
    .subscribe(
      data => {
        console.log(data);
        setTimeout(function() { alert("Suppression bien sucées")}, 3000);
        window.location.reload();
      },
      error => console.log(error));
}
deletedem(id: number) {
  this.demandeservise.deletedemande(id).subscribe(
    data => {
      console.log(data);
      this.reloadData();
      window.location.reload();
    },
    error => console.log(error));
    setTimeout(function() { alert("Suppression bien sucées")}, 3000);
}
deletedemande(id: number){
  this.demandeservise.Supp(id).subscribe(
    data => {
      console.log(data);
      this.reloadData();
      window.location.reload();

    },
    error => console.log(error));
    setTimeout(function() { alert("Suppression bien sucées")}, 2000);
}
affId() {
  this.auth.affierid().subscribe(
     data => {
       this.employerID = data;
       console.log(this.employerID);
       console.log('nbr pointage', this.employerID.length);
     },
     err => {
       this.content = JSON.parse(err.error).message;
     }
   );
}
}

