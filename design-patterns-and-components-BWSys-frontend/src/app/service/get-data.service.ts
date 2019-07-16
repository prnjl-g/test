import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
    baseUrl = "http://localhost:8080/";
    url="";
    constructor(private http : HttpClient) { }
    
    getData(pageNumber,query){
        this.url = this.baseUrl + "query?page=" + pageNumber;
        return this.http.post(this.url,query);
    }

    getMetaData(){
        this.url = this.baseUrl + "metadata";
        return this.http.get(this.url);
    }    

    getTotalNoOfQueryRecords(query){
        this.url = this.baseUrl + "no-of-query-records";
        return this.http.post(this.url,query);
    }
}
