import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StagiaireService } from '../../services/stagiaire.service';
import { Stagiaire } from '../../Stagiaire';

@Component({
  selector: 'app-update-stagiaire',
  templateUrl: './update-stagiaire.component.html',
  styleUrls: ['./update-stagiaire.component.css']
})
export class UpdateStagiaireComponent implements OnInit {
  id: number;
  stagiaire: Stagiaire;

  constructor(private route: ActivatedRoute, private router: Router,
    private stagiaireService: StagiaireService) { }

  ngOnInit() {
    this.stagiaire = new Stagiaire();
    
    this.id = this.route.snapshot.params['id'];

    this.stagiaireService.getStagiaire(this.id)
      .subscribe(data => {
        console.log(data)
        this.stagiaire = data;
      }, error => console.log(error));
  }

  updateStagiaire() {
    this.stagiaireService.updateStagiaire(this.id, this.stagiaire)
      .subscribe(data => {
        console.log(data);
        this.stagiaire = new Stagiaire();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateStagiaire();    
  }

  gotoList() {
    this.router.navigate(['/stagiaires']);
  }
}
