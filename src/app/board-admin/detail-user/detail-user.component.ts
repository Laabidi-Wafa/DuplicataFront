import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from '../Utilisateur';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'app/_services/user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
id: number;
user: Utilisateur;

constructor(private route: ActivatedRoute, private router: Router, private userService: UserService ) { }

  ngOnInit() {
    this.user = new Utilisateur();

    this.id = this.route.snapshot.params['id'];
    this.userService.getUtilisateur(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['utilisateur']);
  }
}

