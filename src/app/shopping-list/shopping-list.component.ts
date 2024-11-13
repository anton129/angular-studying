import { Component } from "@angular/core";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { Ingredient } from "../shared/models/ingredient.model";
import { NgForOf } from "@angular/common";

@Component({
	selector: "app-shopping-list",
	standalone: true,
	imports: [ShoppingEditComponent, NgForOf],
	templateUrl: "./shopping-list.component.html",
	styleUrl: "./shopping-list.component.css",
})
export class ShoppingListComponent {
	ingredients: Ingredient[] = [new Ingredient("Apples", 5), new Ingredient("Tomatoes", 15)];

	onIngChange(ing: Ingredient) {
		this.ingredients.push(ing);
	}
}
