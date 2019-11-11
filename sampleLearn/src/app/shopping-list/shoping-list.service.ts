import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients:Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 5)
  ];

  public fireIngredient = new EventEmitter<Ingredient[]>();

  public addIngredients(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.fireIngredient.emit(this.ingredients.slice());
  }

  public getIngredients(){
    return this.ingredients.slice();
  }

  public addIngredientsArray(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.fireIngredient.emit(this.ingredients.slice());
  }
 }