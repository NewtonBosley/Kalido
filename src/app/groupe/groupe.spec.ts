import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Groupe } from './groupe';

describe('Groupe', () => {
  let component: Groupe;
  let fixture: ComponentFixture<Groupe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Groupe],
    }).compileComponents();

    fixture = TestBed.createComponent(Groupe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
