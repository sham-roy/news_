import { Component } from '@angular/core';
import { NewsapiservicesService } from '../servisec/newsapiservices.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {

  businessnewsDisp:any = [];

  constructor(private srevices:NewsapiservicesService) {

    this.srevices.techNews().subscribe((result)=>{
      this.businessnewsDisp=result.articles;

    })
  }

}
