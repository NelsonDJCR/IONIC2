import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, private crudMethos: PlacesService, private router:Router, private alert:AlertController ) { }

  place: Place

  


  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      var r = paramMap.get('placeId')
      this.place = this.crudMethos.getPlace(r)
    })
  }

  async deletePlace(){


    const alertE = await this.alert.create({
      header:"Delete plce?",
      message:"Are you sure, you want to delete it?",
      buttons:[
        {
          text:'Cancel',
          role:"cancel"
        },
        {
          text:"Delete",
          handler: ()=>{
            this.crudMethos.deletePlace(this.place.id)
            this.router.navigate(['/places'])
          }
        }

      ]
    });
    await alertE.present();
    
    
    
  }

}
