import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Navbar } from './navbar';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create local router links for each page', () => {
    const links = fixture.nativeElement.querySelectorAll('a');

    expect(Array.from(links, (link: HTMLAnchorElement) => link.getAttribute('href'))).toEqual([
      '/accueil',
      '/le-groupe',
      '/spectacles',
      '/contact',
    ]);
  });

  it('should toggle the small-screen menu and close it after selecting a link', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('.menu-toggle');
    const linksContainer: HTMLElement = fixture.nativeElement.querySelector('#liens-navigation');

    button.click();
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(linksContainer.classList.contains('menu-ouvert')).toBe(true);

    document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(linksContainer.classList.contains('menu-ouvert')).toBe(false);

    button.click();
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(linksContainer.classList.contains('menu-ouvert')).toBe(true);

    button.click();
    fixture.detectChanges();

    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(linksContainer.classList.contains('menu-ouvert')).toBe(false);

    component.menuOuvert = true;
    component.fermerMenu();
    expect(component.menuOuvert).toBe(false);
  });
});
