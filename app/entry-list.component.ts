import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'entry-list',
  template: `
  <label>Sort By Calorie Level</label>
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All Entries</option>
    <option value="above500">Entries Above 500 Calories</option>
    <option value="below500">Entries Below 500 Calories</option>
  </select>
  <div *ngFor="let currentEntry of childEntryList | calorieLevel:desiredCalories">
    <entry-display [entry]="currentEntry"></entry-display>
    <button (click)="editButtonHasBeenClicked(currentEntry)">Edit Entry</button>
  </div>
  `
})

export class EntryListComponent {
  @Input() childEntryList: Entry[];
  @Output() clickSender = new EventEmitter();
  public desiredCalories: string = "all";
  onChange(optionFromMenu) {
   this.desiredCalories = optionFromMenu;
   console.log(this.desiredCalories);
  }
  editButtonHasBeenClicked(entryToEdit: Entry) {
   this.clickSender.emit(entryToEdit);
  }
}
