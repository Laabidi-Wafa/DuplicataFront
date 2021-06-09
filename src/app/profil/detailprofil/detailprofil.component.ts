import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'app/_services/user.service';
import { Utilisateur } from 'app/board-admin/Utilisateur';
@Component({
  selector: 'app-detailprofil',
  templateUrl: './detailprofil.component.html',
  styleUrls: ['./detailprofil.component.css']
})
export class DetailprofilComponent implements OnInit {
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

    profilsdetail() {
      this.router.navigate(['examples/profile']);
    }
  }
