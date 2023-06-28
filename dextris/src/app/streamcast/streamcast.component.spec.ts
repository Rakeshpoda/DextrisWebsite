import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamcastComponent } from './streamcast.component';

describe('StreamcastComponent', () => {
  let component: StreamcastComponent;
  let fixture: ComponentFixture<StreamcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamcastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
