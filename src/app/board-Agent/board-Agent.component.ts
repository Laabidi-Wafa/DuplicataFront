import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/_services/user.service';
import { AuthService } from 'app/_services/auth.service';
import { NotifservicesService } from 'app/_services/notifservices.service';
import { Notification } from 'app/board-Agent/Notification' ;
import { Observable } from 'rxjs';
import { UploadfileService } from 'app/_services/uploadfile.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

interface Alert {
  type: string;
  message: string;
}
const ALERTS: Alert[] = [{
  type: 'success',
  message: 'Bonjour Mes amis ,Vous Pouvez joueur avec mois',
}
];

@Component({
  selector: 'app-board-Agent',
  templateUrl: './board-Agent.component.html',
  styleUrls: ['./board-Agent.component.css']
})
export class BoardAgentComponent implements OnInit {
  alerts: Alert[];
  content: any;
  joueurID: any;
  message: any;
  idconnecter: any;
  notification: Notification = new Notification();
  listOfInvi: any = [];
  userconnecter: any;
  client: any;
  Alert: boolean = false;
  Reservation: any = [];
  data: any;
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  fileUploads: Observable<string[]>;
  showFile = false;

  fileInfos: Observable<any>;
  constructor(private userService: UserService , private auth: AuthService
    , private notif: NotifservicesService ,private uploadService: UploadfileService,
    ) { this.reset(); }
    reset() {
      this.alerts = Array.from(ALERTS);
    }

  ngOnInit() {
    this.fileInfos = this.uploadService.getFiles();
    this.fileUploads = this.uploadService.getFiles();
    this.userService.utilisateurBoard().subscribe(
      data => {
        this.content = data;
        console.log('test0', this.content);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.affId();

  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.uploadService.getFiles();
    }
  }
  upload() {
    this.progress = 0;
  
    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
  
    this.selectedFiles = undefined;
  }
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }
  
  affId() {
    this.auth.affierid().subscribe(
       data => {
         this.joueurID = data;
         console.log(this.joueurID);
       },
       err => {
         this.content = JSON.parse(err.error).message;
       }
     );
 }

}