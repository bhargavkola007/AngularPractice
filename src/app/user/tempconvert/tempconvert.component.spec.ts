import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempconvertComponent } from './tempconvert.component';

describe('TempconvertComponent', () => {
  let component: TempconvertComponent;
  let fixture: ComponentFixture<TempconvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempconvertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempconvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
