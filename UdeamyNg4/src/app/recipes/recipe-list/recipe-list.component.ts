import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','http://orsimages.unileversolutions.com/ORS_Images/Knorr_en-IN/Paneer%20Schezuan%20Recipe%20Knorr%20India_29_3.1.2_326X580.Jpeg'),
    new Recipe('A Test Recipe','This is simply a test','http://media2.sailusfood.com/wp-content/uploads/2013/08/crispy-onion-samosa-recipe.jpg'),
    new Recipe('A Test Recipe','This is simply a test','http://hebbarskitchen.hebbars.netdna-cdn.com/wp-content/uploads/2016/07/tawa-pulao-recipe-1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
