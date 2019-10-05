import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleSectionComponent } from './sample-section.component';

describe('SampleSectionComponent', () => {
  let component: SampleSectionComponent;
  let fixture: ComponentFixture<SampleSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
