import { Component, Input } from "@angular/core";
import { NgForOf } from "@angular/common";
import { Recipe } from "../../recipe.model";
import { RecipeService } from "../../recipe.service";

@Component({
	selector: "app-recipe-item",
	standalone: true,
	imports: [NgForOf],
	templateUrl: "./recipe-item.component.html",
	styleUrl: "./recipe-item.component.css",
})
export class RecipeItemComponent {
	@Input() recipe: Recipe = {} as Recipe;

	constructor(private recipeService: RecipeService) {}

	onSelected() {
		this.recipeService.recipeSelected.emit(this.recipe);
	}
}
