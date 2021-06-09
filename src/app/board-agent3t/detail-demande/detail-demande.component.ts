import { Component, OnInit } from '@angular/core';
import { Demande } from 'app/board-employe/Demande';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService } from 'app/_services/demande.service';
import {  Demandecartegrise } from 'app/board-employe/board-demande/demandecartegrise';
import { Observable } from 'rxjs';
import { Demandepermis } from 'app/board-employe/board-demande/demandepermis';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-demande',
  templateUrl: './detail-demande.component.html',
  styleUrls: ['./detail-demande.component.css']
})
export class DetailDemandeComponent implements OnInit {
 demv: string;
 id: number;
 demande:  Demandecartegrise;
 demandecarteg: boolean = false;
 vd: boolean =false;
 display: boolean =false;
 date: Date ;
 demf: Demandepermis;
 closeResult = '';
 content2: string;
 model   = {option: 'option3'};
  constructor(private route: ActivatedRoute, private modalService: NgbModal,
    private demandeservise: DemandeService, private router: Router) { }
  ngOnInit(): void {
    console.log('testdemande cartegris',  this.demandecarteg)
    this.demande = new  Demandecartegrise();
    this.id = this.route.snapshot.params['id'];
    this.demandeservise.getDemandes(this.id)
      .subscribe(data => {
        console.log(data)
        this.demande = data;
        this.demandecarteg === true;
        this.display = true;
        console.log('test4html',  this.display)
        console.log('testdemandecartegrise',  this.demandecarteg)
      }, error => console.log(error));
      this.demandecarteg === true;
      this.aff();
  }
  aff(): void {
    this.demandecarteg === true;
      this.demf = new Demandepermis();
      this.demandecarteg === true;
      this.id = this.route.snapshot.params['id'];
      this.demandeservise.getDemandesf(this.id)
        .subscribe(data => {
          console.log(data)
          this.demandecarteg === true;
          this.demf = data;
          console.log('testdemande permis',  this.demandecarteg);
        }, error => console.log(error));
  }
  Etatvalider() {
  if (this.display === true) {
    console.log('demandeCartegrise', this.display );
    this.valider();
  } else {
    console.log('demandecartegris', this.display);
     this.comfirmer();
}
//this.id = this.route.snapshot.params['date_fiche'];
//console.log(this.id)
  }
  open(content) {
   this.closeResult = this.demv;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.closeResult = `Closed with: ${this.demv}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReasons(reason)}`;
    });
  }
  private getDismissReasons(reason: any): string {
   if (reason === ModalDismissReasons.ESC) {
     return 'by pressing ESC';
   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
     return 'by clicking on a backdrop';
   } else {
     return `with: ${reason}`;
   }
 }

  valider() {
    this.date = new Date();
    console.log(this.date);
    this.demandeservise.validerMedDemandes(this.id, this.demande)
      .subscribe(data => console.log(data), error => console.log(error));
    this.demande = new  Demandecartegrise();
    this.gotolist();
    window.location.reload();
  }
  comfirmer() {
    this.date = new Date();
    console.log(this.date);
    this.demandeservise.validerF(this.id, this.demf)
    .subscribe(
      data =>  console.log(data),
      error => console.log(error));
    this.demf =  new Demandepermis();
    console.log(this.demf);
    this.gotolist();
}
gotolist() {
    this.router.navigate(['/pro']);
  }
  }
