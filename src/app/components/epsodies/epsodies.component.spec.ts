import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpsodiesComponent } from './epsodies.component';

describe('EpsodiesComponent', () => {
  let component: EpsodiesComponent;
  let fixture: ComponentFixture<EpsodiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EpsodiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpsodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
