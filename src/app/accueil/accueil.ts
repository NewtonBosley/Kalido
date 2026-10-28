import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  imports: [Navbar],
  selector: 'app-accueil',
  styleUrl: './accueil.scss',
  templateUrl: './accueil.html',
})
export class Accueil {}
