import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { SearchTitleComponent } from './components/search-title/search-title.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: SearchComponent},
    {path: 'search', component: SearchTitleComponent},
];
