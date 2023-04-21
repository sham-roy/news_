import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../servisec/newsapiservices.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private services: NewsapiservicesService) { }

  topheadingDisplay:any =[];

  ngOnInit(): void {

    this.services.topHeading().subscribe((result: any) => {
      console.log(result);
      this.topheadingDisplay = result.articles;


    })
  }

}
