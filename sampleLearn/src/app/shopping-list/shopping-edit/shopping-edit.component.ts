import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: null}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: null}) amountInputRef: ElementRef;
  ingredient: Ingredient;
  @Output() fireIngredient = new EventEmitter<Ingredient>();
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient = () => this.shoppingListService.addIngredients(new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
}
