import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A test recepie",
      "This is a test",
      "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/nachos_92445_16x9.jpg"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
