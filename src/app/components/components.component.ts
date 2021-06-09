import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';
import { UserService } from 'app/_services/user.service';
import { Contact } from './contact';
import { ContactsService } from 'app/_services/contacts.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit, OnDestroy {
    data : Date = new Date();
    content: string;
    submitted = false;
    page = 4;
    page1 = 5;
    page2 = 3;
    focus;
    focus1;
    focus2;
    form: Contact = new Contact();

    date: {year: number, month: number};
    model: NgbDateStruct;
    public isCollapsed = true;
    public isCollapsed1 = true;
    public isCollapsed2 = true;

    state_icon_primary = true;

    constructor( private renderer : Renderer2, config: NgbAccordionConfig, private router: Router, private userService: UserService ,
         private  contactservice: ContactsService) {
        config.closeOthers = true;
        config.type = 'info';
    }
    save() {
        this.contactservice.createcontact(this.form).subscribe(
            data => {
              console.log(this.form);
              console.log(data);
              this.submitted = true;
            },
            error => console.log(error));
            this.form = new Contact();
            this.router.navigate(['/vehicule']);

    }
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }
    ngOnInit() {
      var rellaxHeader = new Rellax('.rellax-header');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    this.userService.getPublicContent().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
}
    ngOnDestroy(){
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
    onSubmit(){
        this.save();
    }
}
