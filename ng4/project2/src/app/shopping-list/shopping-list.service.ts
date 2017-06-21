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

    addIngredients(ings: Ingredient[]) {

        console.log('SL-Service - Adding to shopping list');

        // Method 1
        // for( let ing of ings ){
        //  this.addIngredient(ing);   
        // }

        // Method 2 - Push in 1 go
        this.ingredients.push(...ings);
        this.ingredientChanged.emit(this.ingredients.slice())    
    }

}