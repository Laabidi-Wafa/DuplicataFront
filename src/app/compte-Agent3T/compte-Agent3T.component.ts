import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/_services/auth.service';

@Component({
  selector: 'app-compte-Agent3T',
  templateUrl: './compte-Agent3T.component.html',
  styleUrls: ['./compte-Agent3T.component.css']
})
export class CompteAgent3TComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private authService: AuthService) { }
      ngOnInit() {
      }

      onSubmit() {
        this.authService.AjouterAgent(this.form).subscribe(
          data => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
          },
          err => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
          }
        );
      }
    }

