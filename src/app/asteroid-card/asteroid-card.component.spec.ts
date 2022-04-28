import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidCardComponent } from './asteroid-card.component';

describe('AsteroidCardComponent', () => {
  let component: AsteroidCardComponent;
  let fixture: ComponentFixture<AsteroidCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsteroidCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
