import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService]  // this will give the new instance to this class 
})
export class RecipesComponent implements OnInit{
  selectedRecipe : Recipe;

  constructor(private recipeService : RecipeService) //since i am not adding service class in the provider it will use the same instance throug out the component
  {  }

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.selectedRecipe = recipe;
        }
      )
  }
}
