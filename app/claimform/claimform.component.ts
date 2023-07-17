import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ClaimService} from '../claimform.service';
@Component({
  selector: 'app-claimform',
  templateUrl: './claimform.component.html',
  styleUrls: ['./claimform.component.css']
})
export class ClaimformComponent {
  formSubmitted = false;
  claimForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private claimService: ClaimService
  ) {
    this.claimForm = this.formBuilder.group({
      policyId:0,
      userName: '',
      subscriptionId: 0,
      claimDate: '',
      claimTypeId: 0,
      claimSummary: '',
      claimDetails:'',
      isRaisedByPolicyHolder:'',
      claimantName:'',
      claimantDateOfBirth:'',
      claimantAddress:'',
      claimantIdProofType:'',
      claimantIdProofNumber:''
    });
  }

  onSubmit(): void {
    if (this.claimForm.valid) {
      const claims = this.claimForm.value;
      this.claimService.addNewClaim(claims)
        .subscribe(() => {
          // Handle successful submission, e.g., show a success message
          this.formSubmitted = true;
          console.log('Claim added successfully.');
          this.claimForm = this.formBuilder.group({
            policyId:0,
            userName: '',
            subscriptionId: 0,
            claimDate: '',
            claimTypeId: 0,
            claimSummary: '',
            claimDetails:'',
            isRaisedByPolicyHolder:'',
            claimantName:'',
            claimantDateOfBirth:'',
            claimantAddress:'',
            claimantIdProofType:'',
            claimantIdProofNumber:''
          });
        }, (error: any) => {
          // Handle error, e.g., show an error message
          console.error('Failed to add claim:', error);
        });
    }
  }
}
