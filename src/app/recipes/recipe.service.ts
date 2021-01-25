import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] = [
        new Recipe(
            'A Test recipe', 
            'This is for test', 
            'https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_1280.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Another Test recipe', 
            'This is for test', 
            'https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_1280.jpg',
            [
                new Ingredient('Bun', 2),
                new Ingredient('Meat', 1)
            ])
      ];

    constructor(private shoppingListService: ShoppingListService){

    }

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addServeralIngredients(ingredients);
    }
}