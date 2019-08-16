import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParametreService {

  listeParametres = [];

  constructor() { }
  addParametre(parametre) {
    this.listeParametres.push(parametre);
  }
  getParametres(){
    return this.listeParametres;
  }
}