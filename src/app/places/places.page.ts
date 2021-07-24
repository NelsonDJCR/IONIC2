import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';
import { Route, Router } from "@angular/router";

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {


  places = []

  constructor(private placeService:PlacesService, private router:Router) { }

  ngOnInit() {
    this.places = this.placeService.getPlaces()
  }

  ionViewWillEnter(){
    this.places = this.placeService.getPlaces()
  }
  
  placeAdd(){
    this.router.navigate(['/place-add'])
    
  }
  goToHome(){
    
    this.router.navigate(['/home'])
  }

}
