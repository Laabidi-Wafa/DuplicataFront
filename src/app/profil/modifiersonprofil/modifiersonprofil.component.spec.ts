import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiersonprofilComponent } from './modifiersonprofil.component';

describe('ModifiersonprofilComponent', () => {
  let component: ModifiersonprofilComponent;
  let fixture: ComponentFixture<ModifiersonprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiersonprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiersonprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
