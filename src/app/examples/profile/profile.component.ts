import * as Rellax from 'rellax';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'app/board-admin/Utilisateur';
import { TokenStorageService } from 'app/_services/token-storage.service';
import { UserService } from 'app/_services/user.service';
import { HttpClient , HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  id: number;
  user: Utilisateur;
  private roles: string[];
  isLoggedIn = false;
  showCitoyenBoard  = false;
  zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
  styles: any[] = [{'featureType': 'water', 'elementType': 'geometry', 'stylers' :[{'color':'#e9e9e9'},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
    data : Date = new Date();
    focus;
    focus1;
    title = 'ImageUploaderFrontEnd';
    public selectedFile;
    public event1;
    imgURL: any;
    imgURL2: any;
    receivedImageData: any;
    base64Data: any;
    convertedImage: any;
    img: any;
    selectedFile2: File;
    retrievedImage: any;
    retrieveResonse: any;
    message: string;
    imageName: any;


    constructor(private token: TokenStorageService, private route: ActivatedRoute,
      private router: Router, private userService: UserService,
      private tokenStorageService: TokenStorageService , private httpClient: HttpClient)  { }

    ngOnInit() {
      var rellaxHeader = new Rellax('.rellax-header');

        var body = document.getElementsByTagName('body')[0];
        body.classList.add('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        this.user = this.token.getUser();
     this.currentUser = this.token.getUser();
     this.isLoggedIn = !!this.tokenStorageService.getToken();
   if (this.isLoggedIn) {
     const user = this.tokenStorageService.getUser();
     this.roles = user.roles;
     this.showCitoyenBoard  = this.roles.includes('ROLE_CITOYEN');
  }
 // this.viewimage(event);
}
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }
  updateUtilisateur(id: number) {
    this.router.navigate(['modifier', id]);
  }
  detailprofile(id: number) {
    this.router.navigate(['detailP', id]);
  }
  envoyerdemande() {
    this.router.navigate(['demande']);

  }
  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile2 = event.target.files[0];
  }
  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile2);
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile2, this.selectedFile2.name);
    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/api/test/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          this.message = 'Image uploaded successfully';
          console.log(this.message);
        } else {
          this.message = 'Image not uploaded successfully';
          console.log(this.message);
        }
      }
      );
  }
    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/api/test/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.pic;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }
  public  onFileChanged2(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    // Below part is used to display the selected image
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
  };
 }
 // This part is for uploading
 onUpload2() {
  const uploadData = new FormData();
  uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
  this.httpClient.post('http://localhost:8080/api/test/upload', uploadData)
  .subscribe(
               res => {console.log(res);
                       this.receivedImageData = res;
                       this.base64Data = this.receivedImageData.pic;
                       this.convertedImage = 'data:image/jpeg;base64,' + this.base64Data; },
               err => console.log('Error Occured duringng saving: ' + err)
            );
 }
 viewimage(event){
   this.userService.getphoto().subscribe(
     data => {
       this.img = data;
       console.log(data);
     },
    err => {
      this.img = JSON.parse(err.error).message;
    }
   );
}

}



