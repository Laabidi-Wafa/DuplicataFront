import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDemandeComponent } from './board-demande.component';

describe('BoardDemandeComponent', () => {
  let component: BoardDemandeComponent;
  let fixture: ComponentFixture<BoardDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
