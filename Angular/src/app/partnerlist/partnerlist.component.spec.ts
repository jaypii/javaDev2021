import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PartnerlistComponent } from './partnerlist.component';

describe('PartnerlistComponent', () => {
  let component: PartnerlistComponent;
  let fixture: ComponentFixture<PartnerlistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
