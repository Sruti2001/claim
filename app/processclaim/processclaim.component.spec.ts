import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessclaimComponent } from './processclaim.component';

describe('ProcessclaimComponent', () => {
  let component: ProcessclaimComponent;
  let fixture: ComponentFixture<ProcessclaimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessclaimComponent]
    });
    fixture = TestBed.createComponent(ProcessclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
