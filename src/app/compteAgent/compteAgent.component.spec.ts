import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteAgentComponent } from './compteAgent.component';

describe('CompteAgentComponent', () => {
  let component: CompteAgentComponent;
  let fixture: ComponentFixture<CompteAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
