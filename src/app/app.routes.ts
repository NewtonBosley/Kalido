import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil';
import { Navbar } from './navbar/navbar';
import { Spectacles } from './spectacles/spectacles';
import { Groupe } from './groupe/groupe';
import { Contact } from './contact/contact';

export const routes: Routes = [
	{ path: '', redirectTo: 'accueil', pathMatch: 'full' },
	{ path: 'accueil', component: Accueil },
	//{ path: 'navbar', component: Navbar },
    { path: 'spectacles', component: Spectacles },
    { path: 'le-groupe', component: Groupe },
    { path: 'contact', component: Contact },
];
