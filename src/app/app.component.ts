import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DatePipe, LowerCasePipe, NgIf, UpperCasePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [
		RouterOutlet,
		LowerCasePipe,
		UpperCasePipe,
		DatePipe,
		FormsModule,
		HeaderComponent,
		RecipesComponent,
		ShoppingListComponent,
		NgIf,
	],
	templateUrl: "./app.component.html",
})
export class AppComponent {
	loadedFeature = "recipe";

	onNavigate(feature: string) {
		this.loadedFeature = feature;
	}
}
