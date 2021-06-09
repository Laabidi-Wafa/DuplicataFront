import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailsfile',
  templateUrl: './detailsfile.component.html',
  styleUrls: ['./detailsfile.component.css']
})
export class DetailsfileComponent implements OnInit {
  @Input() fileUpload: string;

  constructor() { }

  ngOnInit(): void {
  }

}
