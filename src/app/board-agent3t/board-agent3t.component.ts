import { Component, OnInit } from "@angular/core";
import { UserService } from "app/_services/user.service";
import { Observable } from "rxjs";
import { Demande } from "app/board-employe/Demande";
import { DemandeService } from "app/_services/demande.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Utilisateur } from "app/board-admin/Utilisateur";
import { Demandecartegrise } from "app/board-employe/board-demande/demandecartegrise";
import { AuthService } from "app/_services/auth.service";
import { Demandepermis } from "app/board-employe/board-demande/demandepermis";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-board-agent3t",
  templateUrl: "./board-agent3t.component.html",
  styleUrls: ["./board-agent3t.component.css"],
})
export class BoardAgent3tComponent implements OnInit {
  id: number;
  content: any;
  proprietaireID: any;
  notifications: any;
  submitted: false;
  demandeConge: boolean = false;
  isLoggedIn = false;
  demande: Observable<Demandecartegrise[]>;
  offre: any;
  demandeFiche: Observable<Demandepermis[]>;
  utilisateurEmp: Observable<Utilisateur>;
  utilisateur: any[];
  listOfPoint: any = [];
  nomofpoint: any;
  pagesize = 4;
  page = 4;
  demandeconge: boolean = false;
  vd: boolean = false;
  display: boolean = false;
  date: Date;
  demf: Demandepermis;
  datasize: any;
  showNotif: boolean = false;
  shownotifpaix: boolean = false;
  message: any;
  pointpost: any;
  errorMessage = "";
  selectedValue: String;
  closeResult = "";
  model = { option: "option3" };
  demandev: Demandecartegrise;
  demv: string;
  point1: any;
  popup2: boolean = false;
  test: any;
  namecitoyen: any;
  prenomcitoyen: any;
  constructor(
    private userService: UserService,
    private modalService: NgbModal,
    private auth: AuthService,
    private route: ActivatedRoute,
    private demandeservise: DemandeService,
    private router: Router
  ) {}
  goconge() {
    this.demandeConge = true;
    console.log("gocongé", this.demandeConge);
  }
  reloadData() {
    this.goconge();
    console.log("test0", this.demandeConge);
    this.demande = this.demandeservise.getMesDemandes();
    this.demandeservise.getMesDemandes().subscribe(
      (data) => {
        this.offre = data;
        console.log(this.offre);
        for (var i = 0; i < this.offre.length; i++) {
          if (this.offre[i].etat === "NonValider") {
            console.log("demande citoyen", this.offre[i].citoyen.username);
            this.namecitoyen = this.offre[i].citoyen.username;
            console.log("nom", this.namecitoyen);

            console.log("demande citoyen", this.offre[i].citoyen.prenom);
            this.prenomcitoyen = this.offre[i].citoyen.prenom;
            console.log("nom", this.prenomcitoyen);
            this.showNotif = true;
            console.log(this.showNotif);
          }
        }
      },
      (err) => {
        this.offre = JSON.parse(err.error).message;
      }
    );
  }
  reloadDataEmp() {
    this.userService.getEmpList().subscribe(
      (data) => {
        this.utilisateur = data;
        console.log(this.utilisateur);
      },
      (err) => {
        this.utilisateur = JSON.parse(err.error).message;
      }
    );
  }
  gofiche() {
    this.demandeConge = false;
    console.log("gofiche", this.demandeConge);
  }
  reloadfishe() {
    this.gofiche();
    console.log("test1", this.gofiche());
    this.demandeFiche = this.demandeservise.getMesDemandesf();
    console.log(this.demandeFiche);
    this.demandeservise.getMesDemandesf().subscribe((data) => {
      console.log("fichedepaix", data);
      this.offre = data;
      console.log(this.offre);
      for (var i = 0; i < this.offre.length; i++) {
        if (this.offre[i].etat === "NonValider") {
          console.log("test", this.offre[i].etat);
          this.shownotifpaix = true;
          console.log(this.shownotifpaix);
        }
      }
    });
  }
  ngOnInit() {
    this.userService.getProprietaireBoard().subscribe(
      (data) => {
        this.content = data;
        console.log(this.content);
      },
      (err) => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.reloadDataEmp();
    this.reloadData();
    this.reloadfishe();
    this.affId();
    this.notif();
    this.affdemandecongé();
    this.aff();
  }
  updateEmployer(id: number) {
    this.router.navigate(["updateEmp", id]);
  }
  Deleteuser(id: number) {
    this.userService.deleteuser(id).subscribe(
      (data) => {
        console.log(data);
        this.reloadData();
      },
      (error) => console.log(error)
    );
  }
  notif() {
    this.demandeservise.Affichernotification().subscribe(
      (data) => {
        this.message = data;
        console.log(this.message);
      },
      (err) => {
        this.message = JSON.parse(err.error).message;
      }
    );
  }
  affId() {
    this.auth.affierid().subscribe(
      (data) => {
        this.proprietaireID = data;
        console.log(this.proprietaireID);
        this.listOfPoint.push(this.proprietaireID);
        console.log("testpro", this.listOfPoint);
        for (var i = 0; i < this.listOfPoint.length; i++) {
          this.nomofpoint = this.listOfPoint[i].username;
          console.log("pro connecter", this.nomofpoint);
          console.log("pro connecter 2", this.listOfPoint[i]);
        }
        console.log("userpointer", this.listOfPoint);
        this.test = {
          id: "1",
          username: "yasmine",
          prenom: "amara",
          date: "13-02-2020",
          email: "amara14@gmail.",
          password: "ghddks",
          sexe: "m",
          tel: "21332415",
          role_id: "1",
        };
      },
      (err) => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  Validation(id: number) {
    this.demandeConge = false;
    console.log("testcongé", this.demandeConge);
    this.router.navigate(["detaildemande", this.demandeConge, id]);
  }
  valider(id: number) {
    this.demandeConge = true;
    console.log("testfiche", this.demandeConge);
    this.router.navigate(["demandepermis", this.demandeConge, id]);
  }

  affdemandecongé() {
    this.demandev = new Demandecartegrise();
    this.id = this.route.snapshot.params["id"];
    this.demandeservise.getDemandes(this.id).subscribe(
      (data) => {
        console.log(data);
        this.demandev = data;
        this.display = true;
        console.log("display", this.display);
      },
      (error) => console.log(error)
    );
  }
  aff(): void {
    this.demf = new Demandepermis();
    this.id = this.route.snapshot.params["id"];
    this.demandeservise.getDemandesf(this.id).subscribe(
      (data) => {
        console.log(data);
        this.demf = data;
        this.demandeconge = true;
        console.log("demandeConge fi lfichedepaix", this.demandeconge);
      },
      (error) => console.log(error)
    );
  }

  comfirmer() {
    this.date = new Date();
    console.log(this.date);
    this.demandeservise.validerF(this.id, this.demf).subscribe(
      (data) => console.log(data),
      (error) => console.log(error)
    );
    this.demf = new Demandepermis();
    console.log(this.demf);
  }
}
