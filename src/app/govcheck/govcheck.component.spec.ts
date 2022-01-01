import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovChkComponent } from './govcheck.component';

describe('GovChkComponent', () => {
  let component: GovChkComponent;
  let fixture: ComponentFixture<GovChkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovChkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovChkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
