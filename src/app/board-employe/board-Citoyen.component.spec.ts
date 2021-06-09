import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCitoyenComponent } from './board-Citoyen.component';

describe('BoardEmployeComponent', () => {
  let component: BoardCitoyenComponent;
  let fixture: ComponentFixture<BoardCitoyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardCitoyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardCitoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
