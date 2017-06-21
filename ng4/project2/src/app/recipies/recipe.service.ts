
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor( private slService: ShoppingListService ){}

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Salad', 
            'Chiken Salad', 
            'https://upload.wikimedia.org/wikipedia/commons/4/42/Saladlt95.jpg', 
            [
                new Ingredient('Romian Letuce', 1),
                new Ingredient('Shreded cheese', 1),
                new Ingredient('Ceasar Salad Dressing', 1)
            ]),
        new Recipe(
            'Angus Burger', 
            'QP Angus Burger', 
            'https://c1.staticflickr.com/8/7307/8736284104_9a6a3792d2_b.jpg', 
            [
                new Ingredient('Burger bun', 1),
                new Ingredient('QP Angus Burger Patty', 1),
                new Ingredient('Letuce', 1),
                new Ingredient('Tomato', 1),
                new Ingredient('Sliced Cheese', 1),
                new Ingredient('JD BBQ Sauce', 1)
            ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}