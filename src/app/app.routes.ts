import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CasalComponent } from './pages/casal/casal.component';
import { ThanksComponent } from './pages/about/thanks.component';
import { GeneralListComponent } from './pages/general-list/general-list.component';
import { ListaCasamentoComponent } from './pages/lista-casamento/lista-casamento.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'casal', component: CasalComponent },
  { path: 'thanks', component: ThanksComponent },
  { path: 'general-list', component: GeneralListComponent },
  { path: 'listas', component: ListaCasamentoComponent }
];
