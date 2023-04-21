import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private http:HttpClient) { }

  newsApiUrl="https://newsapi.org/v2/top-headlines?country=in&apiKey=a66eda0d19414b9cacb844b628de4967";

  techApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=a66eda0d19414b9cacb844b628de4967"

  businessApiUrl="https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a66eda0d19414b9cacb844b628de4967"

  topHeading():Observable<any>
  {
    return this.http.get(this.newsApiUrl)
  }
  techNews():Observable<any>
  {
    return this.http.get(this.techApiUrl)
  }
  business():Observable<any>
  {
    return this.http.get(this.businessApiUrl)
  }
}
