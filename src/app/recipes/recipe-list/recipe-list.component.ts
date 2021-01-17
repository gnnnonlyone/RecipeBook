import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('A Test recipe', 'This is for test', 'https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_1280.jpg'),
    new Recipe('Another Test recipe', 'This is for test', 'https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_1280.jpg')
  ];
  @Output() selectedItem = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectItem(recipeSelected : Recipe)
  {
    this.selectedItem.emit(recipeSelected);
  }

}
