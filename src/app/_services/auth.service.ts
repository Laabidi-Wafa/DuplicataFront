import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8090/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'connecter', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }
// c'est l'inscription d'un joueur
  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'inscrire', {
      username: user.username,
      prenom: user.prenom,
      email: user.email,
      password: user.password,
      sexe: user.sexe,
      date: user.date,
      tel: user.tel
    }, httpOptions);
  }
  // c'est la partie d'ajouter un compte propriétaire
  creeruncompte(user): Observable<any> {
    return this.http.post(AUTH_API + 'creation', {
      username: user.username,
      prenom: user.prenom,
      email: user.email,
      password: user.password,
      tel: user.tel
    }, httpOptions);
  }
  // c'est la partie d'ajouter un compte Employer
   AjouterAgent(user): Observable<any> {
    return this.http.post(AUTH_API + 'AjoutAgent', {
      username: user.username,
      prenom: user.prenom,
      email: user.email,
      password: user.password,
      tel: user.tel
    }, httpOptions);
  }
  affierid(): Observable<any> {
    return this.http.get(AUTH_API + 'Userconnecter');
}

} 

