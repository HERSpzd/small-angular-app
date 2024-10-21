import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyandSecurityComponent } from './privacyand-security.component';

describe('PrivacyandSecurityComponent', () => {
  let component: PrivacyandSecurityComponent;
  let fixture: ComponentFixture<PrivacyandSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrivacyandSecurityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrivacyandSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
