import { Component } from '@angular/core';
import { updateClassProp } from '@angular/core/src/render3/styling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'EQ Gems';

  constructor() { 
    //this.startGame();
  }

  update() : void {
    console.log("Update called");
  }

  startGame() : void {
    setInterval(() => {this.update();}, 1000);
  }
}