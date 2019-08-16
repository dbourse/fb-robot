import { Component, OnInit } from '@angular/core';
import { ParametreService } from '../parametre.service';

@Component({
  selector: 'app-liste-parametrage',
  templateUrl: './liste-parametrage.component.html',
  styleUrls: ['./liste-parametrage.component.css']
})
export class ListeParametrageComponent implements OnInit {

  constructor(
    private parametreService: ParametreService
  ) { }
  title;
  listeParametres = [];

  ngOnInit() {

    this.title = "Liste de paramétrages"
    //this.parametreService.addParametre('machin');
    this.listeParametres = this.parametreService.getParametres();
  }

  ajouterParametre(parametre){
    console.log("hello");
    this.parametreService.addParametre(parametre);

  }

}