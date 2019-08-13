import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
  <div class="nav-bar">
    <div class="nav-container">
      <div class="row">
        <div class="col s4 left-align">
          <h5>Angular5</h5>
        </div>
        <div class="col s4">
          <input type="text" class="validate search-input" [(ngModel)]="term" placeholder="Search for your images">
          <div><i class="material-icons search-icon">search</i></div>
        </div>
        <div class="col s4">
          <a class="more-btn right">
            <i class="small material-icons">more_horiz</i>
          </a>
          <a class="btn-floating btn-small grey lighten-1 add-btn right">
            <i class="small material-icons">add</i>
          </a>
        </div>
      </div>
    </div>
  </div>
  `
})
export class NavBarComponent {
  term: string;
}
