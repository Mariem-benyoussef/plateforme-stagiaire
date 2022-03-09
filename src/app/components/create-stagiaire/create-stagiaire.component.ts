import { Component, OnInit } from '@angular/core';
import { Stagiaire } from 'src/app/Stagiaire';
import { Router } from '@angular/router';
import { StagiaireService } from '../../services/stagiaire.service';

@Component({
  selector: 'app-create-stagiaire',
  templateUrl: './create-stagiaire.component.html',
  styleUrls: ['./create-stagiaire.component.css']
})
export class CreateStagiaireComponent implements OnInit {
  stagiaire: Stagiaire = new Stagiaire();
  submitted = false;
  constructor(private stagiaireService: StagiaireService,
    private router: Router) { }

  ngOnInit() {
  }
  newStagiaire(): void {
    this.submitted = false;
    this.stagiaire = new Stagiaire();
  }

  save() {
    this.stagiaireService
    .createStagiaire(this.stagiaire).subscribe(data => {
      console.log(data)
      this.stagiaire = new Stagiaire();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/stagiaires']);
  }
}
