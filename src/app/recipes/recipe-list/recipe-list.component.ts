import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple test Recipe', 'https://www.allrecipes.com/thmb/hoEsUdGmsiFyvXm5Ed5t2Gd1u7k=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2400-240708-broccoli-and-chicken-stir-fry-3x4-186-b7f290a400134ae9910f2e67ff50d9f2.jpg'),
    new Recipe('Another Test Recipe', 'This is simple test Recipe', 'https://www.allrecipes.com/thmb/hoEsUdGmsiFyvXm5Ed5t2Gd1u7k=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2400-240708-broccoli-and-chicken-stir-fry-3x4-186-b7f290a400134ae9910f2e67ff50d9f2.jpg')

  ];

  constructor() {}

  ngOnInit(){
  }

  onRecipeSelected(recipe : Recipe) //taking Recipe as parameter as object
  {
    this.recipeWasSelected.emit(recipe); //passing recipe as data
  }

}
