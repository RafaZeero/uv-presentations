import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EitherComponent } from './either.component';

describe('EitherComponent', () => {
  let component: EitherComponent;
  let fixture: ComponentFixture<EitherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EitherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EitherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
