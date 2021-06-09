import { Component, OnInit } from '@angular/core';
import { DemandeService } from 'app/_services/demande.service';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-board-demande',
  templateUrl: './board-demande.component.html',
  styleUrls: ['./board-demande.component.css']
})
export class BoardDemandeComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSendFailed = false;
  errorMessage = '';
  model: NgbDateStruct;
  demandeCG: boolean = false;
constructor(private demande: DemandeService , private router: Router) { }

  ngOnInit() {
    this.demandeCG = true;
  }
  gocarte() {
    this.demandeCG = true;
    console.log(this.demandeCG);

  }
  gopermis() {
    this.demandeCG = false;
    console.log(this.demandeCG);

  }
onSubmit() {
  console.log('test', this.demandeCG);
  if (this.demandeCG === true) {
    console.log('test2', this.demandeCG);
    this.demande.Envoyer(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        console.log(this.form);
        this.router.navigate(['/BoardCitoyen']);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  } else {
    console.log('test3', this.demandeCG);
    this.demande.Envoidemande(this.form).subscribe(
    datf => {
      console.log(datf);
      console.log(this.form);
      this.router.navigate(['/BoardCitoyen']);
},
err => {
  this.errorMessage = err.error.message;
}
  )}
    }
  }
