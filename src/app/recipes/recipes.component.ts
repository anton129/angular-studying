import { Component, OnInit } from "@angular/core";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { Recipe } from "./recipe.model";
import { JsonPipe, NgIf } from "@angular/common";
import { RecipeService } from "./recipe.service";

@Component({
	selector: "app-recipes",
	standalone: true,
	imports: [RecipeListComponent, RecipeDetailComponent, NgIf, JsonPipe],
	templateUrl: "./recipes.component.html",
	styleUrl: "./recipes.component.css",
	providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
	selectedRecipe: Recipe | undefined;

	constructor(private recipeService: RecipeService) {}

	ngOnInit() {
		this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
			this.selectedRecipe = recipe;
		});
	}
}
