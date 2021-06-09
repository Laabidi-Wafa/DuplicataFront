import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  private baseUrl = "http://localhost:8090/api/auth/sendcontact";

  constructor(private http: HttpClient) {}
  createcontact(contact: any): Observable<any> {
    return this.http.post(this.baseUrl, contact);
  }
}
