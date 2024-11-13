import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { Ingredient } from "../../shared/models/ingredient.model";

@Component({
	selector: "app-shopping-edit",
	standalone: true,
	imports: [],
	templateUrl: "./shopping-edit.component.html",
	styleUrl: "./shopping-edit.component.css",
})
export class ShoppingEditComponent {
	@ViewChild("nameInput") nameInputRef: ElementRef | undefined;
	@ViewChild("amountInput") amountInputRef: ElementRef | undefined;
	@Output() ingredientAdded = new EventEmitter<Ingredient>();

	onAddItem() {
		const ingName = this.nameInputRef?.nativeElement.value as string;
		const ingAmount = this.amountInputRef?.nativeElement.value as number;
		const newIngredient = new Ingredient(ingName, ingAmount);

		this.ingredientAdded.emit(newIngredient);
	}
}
