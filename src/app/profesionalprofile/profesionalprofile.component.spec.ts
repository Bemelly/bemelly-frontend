import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalprofileComponent } from './profesionalprofile.component';

describe('ProfesionalprofileComponent', () => {
  let component: ProfesionalprofileComponent;
  let fixture: ComponentFixture<ProfesionalprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesionalprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesionalprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
