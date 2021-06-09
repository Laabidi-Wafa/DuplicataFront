import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from 'app/_services/user.service';
import { Utilisateur } from './Utilisateur';
import { AuthService } from 'app/_services/auth.service';
@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css', './board-admin.component.scss']
})
export class BoardAdminComponent implements OnInit {
  content = '';
  isLoggedIn = false;
  utilisateur: Observable <Utilisateur[]>
  pagesize = 4;
  connnecter='';
  page = 1;
  datasize: any;
  adminis: any;
  listOfPoint: any = [];
  nomofpoint: any;
  userlist:any [];
  test: any;
  pointpost: any;
  ca: any;
  nomuser: any;
  compteadmine: any;
  tableauAdmin= [];
  compteAdmin =false ;
  listeUserJdid: any;
  constructor(private userService: UserService,  private router: Router ,private auth: AuthService) {

  }
  reloadData() {
    this.utilisateur = this.userService.getUserList();
    
    this.userService.getUserList().subscribe(
      data => {
        this.compteadmine = data;
        console.log('llll',this.compteadmine);
        for( var i = 0 ; i < this.compteadmine.length; i++) {
          this.ca = this.compteadmine[i].id;
          console.log('la liste user', this.ca);
          if(this.ca === this.nomuser){
            console.log('succées');
          } else 
          {
          console.log('not equivaut');
          this.tableauAdmin.push(this.compteadmine[i]);
          console.log('tableau jdid',this.tableauAdmin);
          
        }
        }
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    ); 
  }
  
  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.content = data;
        console.log('le nom du board',data);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.affId();
    this.reloadData();
  }
  DetailsUser(id: number) {
    this.router.navigate(['details', id]);
  }
  updateUtilisateur(id: number) {
    this.router.navigate(['update', id]);
  }
  Deleteuser(id: number) {
    this.userService.deleteuser(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
 );
 window.location.reload();
}
affId() {
  this.auth.affierid().subscribe(
     data => {
       this.adminis = data;
       console.log('test1',this.adminis);
       this.listOfPoint.push(this.adminis);
       console.log('test2',this.listOfPoint);
       for( var i = 0 ; i < this.listOfPoint.length; i++) {
        this.nomuser = this.listOfPoint[i].id;
        console.log('username connecter1', this.nomuser);
        
     
      }
     },
     err => {
       this.content = JSON.parse(err.error).message;
     }
   );
}
  }
