import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidContainerComponent } from './asteroid-container.component';

describe('AsteroidContainerComponent', () => {
  let component: AsteroidContainerComponent;
  let fixture: ComponentFixture<AsteroidContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsteroidContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
