import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const API_URL = "http://localhost:8090/api/test/";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private baseUrl = "http://localhost:8090/api/test/user";
  constructor(private http: HttpClient) {}

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + "all", { responseType: "text" });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + "user", { responseType: "text" });
  }
  getCitoyenBoard(): Observable<any> {
    return this.http.get(API_URL + "Citoyen", { responseType: "text" });
  }

  getProprietaireBoard(): Observable<any> {
    return this.http.get(API_URL + "pro", { responseType: "text" });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + "admin", { responseType: "text" });
  }
  getEmployeBoard(): Observable<any> {
    return this.http.get(API_URL + "employe", { responseType: "text" });
  }
  utilisateurBoard(): Observable<any> {
    return this.http.get(API_URL + "username", { responseType: "text" });
  }
  getUserList(): Observable<any> {
    return this.http.get(API_URL + "listuser");
  }
  getEmpList(): Observable<any> {
    return this.http.get(API_URL + "userEmp");
  }
  getjoueurList(): Observable<any> {
    return this.http.get(API_URL + "userjoueur");
  }

  getphoto(): Observable<any> {
    return this.http.get(API_URL + "imageaff");
  }
  getUtilisateur(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getnomprofil(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  updateUtilisateur(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteuser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: "text" });
  }
}
