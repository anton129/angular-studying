import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe(
			"test",
			"test desc",
			"https://static01.nyt.com/images/2023/12/07/multimedia/LH-Flank-steak/nd-cucumber-salad-hwtv-superJumbo.jpg",
		),
	];

	getRecipes() {
		return this.recipes.slice();
	}
}
