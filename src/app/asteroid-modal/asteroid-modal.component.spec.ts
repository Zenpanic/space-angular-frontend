import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidModalComponent } from './asteroid-modal.component';

describe('AsteroidModalComponent', () => {
  let component: AsteroidModalComponent;
  let fixture: ComponentFixture<AsteroidModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsteroidModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
