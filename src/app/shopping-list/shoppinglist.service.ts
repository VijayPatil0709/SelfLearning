import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10) 
      ];

    getIngredients(){
        return this.ingredients.slice(); // this line return copy of data but not the exact data using slice()
            // this line will not return new added record
            //so below funstion we have added new line of code which will return the new record added
    }

    addIngredient(ingredient : Ingredient)
    {
        this.ingredients.push(ingredient);  
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}