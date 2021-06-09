import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
const AUTH_API = "http://localhost:8080/api/";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};
@Injectable({
  providedIn: "root",
})
export class NotifservicesService {
  private baseurl = "http://localhost:8090/api/getNotif";
  constructor(private http: HttpClient) {}
  Ajoutmessage(Notification: any): Observable<any> {
    return this.http.post(
      AUTH_API + "ajoutnotification",
      {
        titre: (Notification.titre = "demande"),
        description: (Notification.description =
          "je cherche un autre joueur pour un Match"),
      },
      httpOptions
    );
  }
  Affmessage(): Observable<any> {
    return this.http.get(AUTH_API + "id", { responseType: "text" });
  }
  getMessage(): Observable<any> {
    return this.http.get(`${this.baseurl}`);
  }
}
