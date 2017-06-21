import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

    // ingredientAdded = new EventEmitter<Ingredient>();
    ingredientChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10),
    ];

    constructor(){
        /*
        this.ingredientAdded.subscribe(
            (ing: Ingredient) => {
                this.ingredients.push(ing);
            }
        )
        */
    }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ing: Ingredient) {
        this.ingredients.push(ing);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

}