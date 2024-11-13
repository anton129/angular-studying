import { Component, OnInit } from "@angular/core";
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { Recipe } from "../recipe.model";
import { NgForOf, NgOptimizedImage } from "@angular/common";
import { RecipeService } from "../recipe.service";

@Component({
	selector: "app-recipe-list",
	standalone: true,
	imports: [RecipeItemComponent, NgForOf, NgOptimizedImage],
	templateUrl: "./recipe-list.component.html",
	styleUrl: "./recipe-list.component.css",
	providers: [RecipeService],
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] | undefined;

	constructor(private recipeService: RecipeService) {}

	ngOnInit(): void {
		this.recipes = this.recipeService.getRecipes();
	}
}
