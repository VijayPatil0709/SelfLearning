import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

//Recipe Service
export class RecipeService{
    public recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe('A Test Recipe', 'This is simple test Recipe', 'https://www.allrecipes.com/thmb/hoEsUdGmsiFyvXm5Ed5t2Gd1u7k=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2400-240708-broccoli-and-chicken-stir-fry-3x4-186-b7f290a400134ae9910f2e67ff50d9f2.jpg'),
        new Recipe('Another Test Recipe', 'This is simple test Recipe', 'https://www.allrecipes.com/thmb/hoEsUdGmsiFyvXm5Ed5t2Gd1u7k=/1900x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2400-240708-broccoli-and-chicken-stir-fry-3x4-186-b7f290a400134ae9910f2e67ff50d9f2.jpg')
    
      ];

      getRecipe(){
        return this.recipes.slice();  //since array object refernce type
      }
}