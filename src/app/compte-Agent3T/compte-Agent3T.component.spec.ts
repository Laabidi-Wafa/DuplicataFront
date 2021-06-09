import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteAgent3TComponent } from './compte-Agent3T.component';

describe('CompteAgent3TComponent', () => {
  let component: CompteAgent3TComponent;
  let fixture: ComponentFixture<CompteAgent3TComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteAgent3TComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteAgent3TComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
