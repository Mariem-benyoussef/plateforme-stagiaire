import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StagiaireService } from '../../services/stagiaire.service';
import { Stagiaire } from '../../Stagiaire';

@Component({
  selector: 'app-stagiaire-list',
  templateUrl: './stagiaire-list.component.html',
  styleUrls: ['./stagiaire-list.component.css']
})
export class StagiaireListComponent implements OnInit {
  stagiaires: Observable<Stagiaire[]>;
  constructor(private stagiaireService: StagiaireService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.stagiaires = this.stagiaireService.getStagiairesList();
  }

  deleteStagiaire(id: number) {
    this.stagiaireService.deleteStagiaire(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  stagiaireDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateStagiaire(id: number){
    this.router.navigate(['update', id]);
  }
}
