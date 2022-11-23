import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BemellyappLayoutComponent } from './bemellyapp-layout.component';

describe('BemellyappLayoutComponent', () => {
  let component: BemellyappLayoutComponent;
  let fixture: ComponentFixture<BemellyappLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BemellyappLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BemellyappLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
