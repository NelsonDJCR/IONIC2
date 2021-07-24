import { Component, OnInit } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private api:PhotosService) {}

  photos=[];

  ngOnInit(){
    return this.api.getPhotos().subscribe(r => {
      this.photos = r;
    })
  }

}
