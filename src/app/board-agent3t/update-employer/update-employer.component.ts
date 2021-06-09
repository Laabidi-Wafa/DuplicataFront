import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'app/_services/user.service';
import { Utilisateur } from 'app/board-admin/Utilisateur';

@Component({
  selector: 'app-update-employer',
  templateUrl: './update-employer.component.html',
  styleUrls: ['./update-employer.component.css']
})
export class UpdateEmployerComponent implements OnInit {
  id: number;
  user: Utilisateur;
  submitted: false;
    constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }
    ngOnInit() {
      this.user = new Utilisateur();
      this.id = this.route.snapshot.params['id'];
      this.userService.getUtilisateur(this.id)
        .subscribe(data => {
          console.log(data)
          this.user = data;
        }, error => console.log(error));
    }
    updateUtilisateur() {
      this.userService.updateUtilisateur(this.id, this.user)
        .subscribe(data => console.log(data), error => console.log(error));
      this.user = new Utilisateur();
      this.id = this.route.snapshot.params['id'];
      this.gotoList();
    }
    onSubmit() {
      this.updateUtilisateur();
    }
    gotoList() {
      this.router.navigate(['/pro']);
    }
}
