import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StagiaireService } from '../../services/stagiaire.service';
import { Stagiaire } from '../../Stagiaire';

@Component({
  selector: 'app-stagiaire-details',
  templateUrl: './stagiaire-details.component.html',
  styleUrls: ['./stagiaire-details.component.css']
})
export class StagiaireDetailsComponent implements OnInit {

  id: number;
  stagiaire: Stagiaire;

  constructor(private route: ActivatedRoute,private router: Router,
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

  list(){
    this.router.navigate(['stagiaires']);
  }
}
