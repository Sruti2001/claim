import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-claimlist',
  templateUrl: './claimlist.component.html',
  styleUrls: ['./claimlist.component.css']
})
export class ClaimlistComponent {
  data: any;
  ispresent = false;
  constructor(private http: HttpClient) {this.fetchData()}

  fetchData() {
    this.http.get<any>(`http://localhost:9999/api/claims`)
      .subscribe(response => {
        this.data = response;
        this.ispresent = true;
        console.warn(response);
      });
  }
  
  onProcessClaimClick(claimid:string,claimStatus:string){
  console.log("get success")
  fetch(`http://localhost:9999/api/claims/${claimid}/process`, {
    headers: {
      'Content-Type': 'application/json'
    },
  method: 'PUT',
  body: JSON.stringify({
    
      "claimId": 3,
      "responseDetails": claimStatus,
      "responseDate": ""
  
  })
});
}
}
