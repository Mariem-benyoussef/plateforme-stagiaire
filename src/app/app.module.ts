import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateStagiaireComponent } from './components/create-stagiaire/create-stagiaire.component';
import { StagiaireListComponent } from './components/stagiaire-list/stagiaire-list.component';
import { UpdateStagiaireComponent } from './components/update-stagiaire/update-stagiaire.component';
import { StagiaireDetailsComponent } from './components/stagiaire-details/stagiaire-details.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateStagiaireComponent,
    StagiaireListComponent,
    UpdateStagiaireComponent,
    StagiaireDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
