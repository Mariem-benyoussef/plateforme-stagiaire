import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateStagiaireComponent } from './components/create-stagiaire/create-stagiaire.component';
import { StagiaireDetailsComponent } from './components/stagiaire-details/stagiaire-details.component';
import { StagiaireListComponent } from './components/stagiaire-list/stagiaire-list.component';
import { UpdateStagiaireComponent } from './components/update-stagiaire/update-stagiaire.component';


const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'stagiaires', component: StagiaireListComponent },
  { path: 'add', component: CreateStagiaireComponent },
  { path: 'update/:id', component: UpdateStagiaireComponent },
  { path: 'details/:id', component: StagiaireDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
