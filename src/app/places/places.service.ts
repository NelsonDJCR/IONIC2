import { findLast } from '@angular/compiler/src/directive_resolver';
import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor() { }

  private places: Place[] = [
      {
        id:'1',
        title:'Inc,and Sons,LLC,Group',
        img:'http://placeimg.com/640/480/business',
        comments:['asdas','col']
      },
      {
        id:'2',
        title:'deploy',
        img:'http://placeimg.com/640/480/city',
        comments:[]
      },
  ]

  getPlaces(){
    return [...this.places]
  }
  
  getPlace(placeId:string){
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }

  addPlace(title:string, img:string){
    this.places.push({
      id:this.places.length + 1 + "",
      title,
      img,
      comments:[],
    });
  }

  deletePlace(placeId: string){
    
    this.places = this.places.filter(place => {
      return  place.id !== placeId
    })
    
  }

  


}
