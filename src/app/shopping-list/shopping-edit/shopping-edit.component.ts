import { Component, ElementRef, OnInit,  ViewChild, output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent implements OnInit{

  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;

  // @Output() ingredientAdded = new EventEmitter<Ingredient>(); //EventEmitter<{name:string, amount:number}>();
  constructor(private slService: ShoppingListService) {}
  ngOnInit() {
    
  }

  onAddItem()
  {
    console.log("Onadd");
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.slService.addIngredient(newIngredient);
    // this.ingredientAdded.emit(newIngredient);
  }
}
