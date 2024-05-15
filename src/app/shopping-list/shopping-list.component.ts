import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  providers: [ShoppingListService] // need to check we should not add this code over her
})
export class ShoppingListComponent implements OnInit{

  ingredients: Ingredient[];
  // = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10) 
  // ];

  constructor(private slServie: ShoppingListService){}
  ngOnInit(){
    this.ingredients = this.slServie.getIngredients();
    this.slServie.ingredientsChanged
    .subscribe(
      (ingredients : Ingredient[]) => {
        this.ingredients = ingredients
      }
    );
  }
  

   
  // onIngredientAdded(ingredient : Ingredient){
  //   this.ingredients.push(ingredient);
  // }

}
