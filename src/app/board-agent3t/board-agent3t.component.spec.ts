import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAgent3tComponent } from './board-agent3t.component';

describe('BoardAgent3tComponent', () => {
  let component: BoardAgent3tComponent;
  let fixture: ComponentFixture<BoardAgent3tComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardAgent3tComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAgent3tComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
