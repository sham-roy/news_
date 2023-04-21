import { Component } from '@angular/core';
import { NewsapiservicesService } from '../servisec/newsapiservices.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent {

  technewsDisp:any = [];

  constructor(private srevices:NewsapiservicesService) {

    this.srevices.techNews().subscribe((result)=>{
      this.technewsDisp=result.articles;

    })
  }

}
