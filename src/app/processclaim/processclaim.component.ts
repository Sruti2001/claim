import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-processclaim',
  templateUrl: './processclaim.component.html',
  styleUrls: ['./processclaim.component.css']
})
export class ProcessclaimComponent {
  data: any;
  ispresent = false;
  claimResponseService: any;
  claim: any;
  constructor(private http: HttpClient) {this.fetchData(claimid,claimStatus)}

  fetchData(claimid:string,claimStatus:string) {
    this.http.put<any>(`http://localhost:9999/api/claims/${claimid}/process`,{
      headers: {
        'Content-Type': 'application/json'
      },
    method: 'PUT',
    body: JSON.stringify({
      
        "claimId": 3,
        "responseDetails": claimStatus,
        "responseDate": ""
    
    })
  })
      .subscribe(response => {
        this.data = response;
        this.ispresent = true;
        console.warn(response);
      });
  }
  onAcceptClaimClick(){
    this.claim.claimStatus("Accepted")
    .subscribe(() => {
      // Handle successful submission, e.g., show a success message
      console.log('Claim Accepted successfully.');
    }, (error: any) => {
      // Handle error, e.g., show an error message
      console.error('Failed to Updated claim:', error);
    });
  }
  onRejectClaimClick(){
    this.claim.claimStatus("Rejected")
    .subscribe(() => {
      // Handle successful submission, e.g., show a success message
      console.log('Claim Rejected successfully.');
    }, (error: any) => {
      // Handle error, e.g., show an error message
      console.error('Failed to Updated claim:', error);
    });
    
  }
  
}
