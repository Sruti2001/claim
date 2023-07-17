import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  private apiUrl = 'http://localhost:9999/api/claims';

  constructor(private http: HttpClient) {}

  addNewClaim(claimDTO: any): Observable<void> {
    return this.http.post<void>(this.apiUrl, claimDTO);
  }
}