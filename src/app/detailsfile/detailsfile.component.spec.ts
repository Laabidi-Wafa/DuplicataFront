import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsfileComponent } from './detailsfile.component';

describe('DetailsfileComponent', () => {
  let component: DetailsfileComponent;
  let fixture: ComponentFixture<DetailsfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
