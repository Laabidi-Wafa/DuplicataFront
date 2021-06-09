import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpRequest,
  HttpHeaders,
  HttpEvent,
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UploadfileService {
  private baseUrl = "http://localhost:8090/api";

  constructor(private http: HttpClient) {}

  upload(file: File): Observable<any> {
    const formData: FormData = new FormData();

    const formdata: FormData = new FormData();

    formdata.append("file", file);

    const req = new HttpRequest(
      "POST",
      "http://localhost:8090/api/upload",
      formdata,
      {
        reportProgress: true,
        responseType: "text",
      }
    );

    return this.http.request(req);
  }
  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}
