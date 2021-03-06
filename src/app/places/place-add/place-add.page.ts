import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor(private crud:PlacesService, private router:Router) { }

  ngOnInit() {
  }

  placeSave(title, url){
    
    this.crud.addPlace(title.value, url.value)
    this.router.navigate(['/places'])

    
  }

}
