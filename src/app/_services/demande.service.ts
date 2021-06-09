import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthService } from "./auth.service";

const AUTH_API = "http://localhost:8090/api/Adm/";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: "root",
})
export class DemandeService {
  employerID: any;

  private baseSup = "http://localhost:8090/api/Adm/demandec";
  private baseUrl = "http://localhost:8090/api/Adm/demande";
  private baseUrlF = "http://localhost:8090/api/Adm/demandefiche";
  private API_URL = "http://localhost:8090/api/Adm/notif";
  private baseUrlP = "http://localhost:8090/api/Adm/demandef";
  private baseUrlfishe = "http://localhost:8090/api/Adm/demandefiche";

  constructor(private http: HttpClient, private auth: AuthService) {}
  Envoyer(demandecartegris): Observable<any> {
    return this.http.post(
      AUTH_API + "DemandeCartegris",
      {
        matricule: demandecartegris.matricule,
        date_perte: demandecartegris.date_perte,
        createdDate: demandecartegris.createdDate,
        etat: (demandecartegris.etat = "NonValider"),
        citoyen: demandecartegris.citoyen,
      },
      httpOptions
    );
  }
  Envoidemande(demandepermis): Observable<any> {
    return this.http.post(
      AUTH_API + "demandep",
      {
        matricule: demandepermis.matricule,
        date_perte: demandepermis.date_perte,
        createdDate: demandepermis.createdDate,
        etat: (demandepermis.etat = "NonValider"),
        citoyen: demandepermis.citoyen,
      },
      httpOptions
    );
  }
  Affichernotification(): Observable<any> {
    return this.http.get(AUTH_API + "notification", { responseType: "text" });
  }
  getMesDemandes(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getMesDemandesf(): Observable<any> {
    return this.http.get(`${this.baseUrlF}`);
  }
  getDemandes(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getDemandesf(id: number): Observable<any> {
    return this.http.get(`${this.baseUrlP}/${id}`);
  }

  validerMedDemandes(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  validerF(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrlfishe}/${id}`, value);
  }
  writeNotif(): Observable<any> {
    return this.http.get(` ${this.API_URL}`);
  }
  deletedemande(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }
  Supp(id: number): Observable<any> {
    return this.http.delete(`${this.baseSup}/${id}`, { responseType: "text" });
  }
}
