import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Spectacles } from './spectacles';

describe('Spectacles', () => {
  let component: Spectacles;
  let fixture: ComponentFixture<Spectacles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spectacles],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Spectacles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
