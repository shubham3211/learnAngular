import { Recipe } from './recepie.model'
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoping-list.service'

@Injectable()
export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();
  private recepies: Recipe[] = [
    new Recipe('A Test Recipe', 
    'This is simply a test', 
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*',
    [
      new Ingredient('Meat', 1),
      new Ingredient('lobster', 10)
    ]),
    
    new Recipe('A Test Recipe', 
    'This is simply a test',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=0.669xw:1.00xh;0.173xw,0&resize=640:*',
    [
      new Ingredient('Buns', 10),
      new Ingredient('Cucumber', 10)
    ])
  ];

  public getRecipes() {
    console.log(this.recepies)
    return this.recepies.slice();
  }

  constructor(private shoppingListService: ShoppingListService){}

  public addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredientsArray(ingredients);
  }
}