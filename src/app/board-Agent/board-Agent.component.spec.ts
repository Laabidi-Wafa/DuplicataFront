import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardAgentComponent } from './board-Agent.component';

describe('BoardAgentComponent', () => {
  let component: BoardAgentComponent;
  let fixture: ComponentFixture<BoardAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
