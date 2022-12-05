import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakepublicationComponent } from './makepublication.component';

describe('MakepublicationComponent', () => {
  let component: MakepublicationComponent;
  let fixture: ComponentFixture<MakepublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakepublicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakepublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
