import { Component, OnInit } from '@angular/core';
import { CritereService } from '../critere.service';


import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import {map} from 'rxjs/operators'
import { switchMap, catchError } from 'rxjs/operators';
import { IFeteMusique } from '../fete-musique';

@Component({
  selector: 'app-critere-list',
  templateUrl: './critere-list.component.html',
  styleUrls: ['./critere-list.component.css']
})
export class CritereListComponent implements OnInit {

  criteres : IFeteMusique[];
  fields : [];
  locationName = "";
  criteresProperty = [];


  constructor(
   private critereService : CritereService
  ) { }

  ngOnInit() {
   this.getItems();
  }

  updateLocationName(locationName){
    this.locationName = locationName;
    this.getItems();
  }

  getItems(){
     this.critereService.getItems()
    .pipe(
      map(
        (items: IFeteMusique[]) => items.filter(
          (items: IFeteMusique) => items.fields.location_name.match( this.locationName)
        )
      )
    )
    .subscribe(
      items => this.criteres = items

      //items => this.fields = items.fields
    );
  }

}