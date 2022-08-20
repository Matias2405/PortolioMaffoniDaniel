import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerInfoComponent } from './primer-info.component';

describe('PrimerInfoComponent', () => {
  let component: PrimerInfoComponent;
  let fixture: ComponentFixture<PrimerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
