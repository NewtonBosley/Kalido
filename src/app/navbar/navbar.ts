import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  menuOuvert = false;

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  basculerMenu(): void {
    this.menuOuvert = !this.menuOuvert;
  }

  fermerMenu(): void {
    this.menuOuvert = false;
  }

  @HostListener('document:click', ['$event'])
  fermerSiClicExterieur(event: MouseEvent): void {
    const menu = this.elementRef.nativeElement.querySelector('.menu-container');
    if (menu && event.target instanceof Node && !menu.contains(event.target)) {
      this.fermerMenu();
    }
  }
}
