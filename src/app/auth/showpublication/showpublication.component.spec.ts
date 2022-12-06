import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpublicationComponent } from './showpublication.component';

describe('ShowpublicationComponent', () => {
  let component: ShowpublicationComponent;
  let fixture: ComponentFixture<ShowpublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowpublicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowpublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
