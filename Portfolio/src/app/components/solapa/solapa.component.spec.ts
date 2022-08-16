import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolapaComponent } from './solapa.component';

describe('SolapaComponent', () => {
  let component: SolapaComponent;
  let fixture: ComponentFixture<SolapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolapaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
