import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  speed: number = 250;
  hasGem: boolean[][] = [];
  data: number[][] = [];
  currentPos: [number, number] = [0, 0];
  currentGem: number;
  nextGem: number;
  startPos: [number, number] = [6, 0];

  moveCurrentGemDown() {
    this.hasGem[this.currentPos[0]][this.currentPos[1]] = false;

    this.currentPos[1] ++;

    this.hasGem[this.currentPos[0]][this.currentPos[1]] = true;
    this.data[this.currentPos[0]][this.currentPos[1]] = this.currentGem;
    this.updateGemDisplay();
  }

  placeGem() {
    // TODO: Logic for clearing gems.
  }

  startNextGem() {
    this.currentGem = this.nextGem;
    this.currentPos[0] = this.startPos[0];
    this.currentPos[1] = this.startPos[1];

    this.hasGem[this.currentPos[0]][this.currentPos[1]] = true;
    this.data[this.currentPos[0]][this.currentPos[1]] = this.currentGem;

    this.nextGem = this.generateGem();

    this.updateGemDisplay();
  }

  update() {
    this.moveCurrentGemDown();

    if(this.currentPos[1] + 1 >= this.hasGem[this.currentPos[0]].length 
      || this.hasGem[this.currentPos[0]][this.currentPos[1]+1]) {
        this.placeGem();
        this.startNextGem();
    }
  }

  updateGemDisplay() {
    $('#r' + this.currentPos[0] + '-' + this.currentPos[1]).append($('#currentGem'));
  }

  startGame() {
    this.startNextGem();
    this.startNextGem();
    
    setInterval(() => {this.update();}, this.speed);
  }

  generateGem() : number {
    var gemColor : number;
    var gemType : number;

    gemColor = Math.floor(Math.random() * 2) + 1;
    gemType = Math.floor(Math.random() * 1) + 1;

    return gemColor * 10 + gemType;
  }

  ngOnInit() {
    for(var i = 0; i < 15; i++) {
      var array : boolean[] = [];
      var dataArray : number[] = [];

      for(var j = 0; j < 15; j++) {
        array.push(false);
        dataArray.push(0);
      }

      this.hasGem.push(array);
      this.data.push(dataArray);
    }

    this.startGame();
  }

  createRange(num : number) {
    var items: number[] = [];
    for(var i = 0; i < num; i++){
      items.push(i);
    }
    return items;
  }

  getColumns() {
    return this.createRange(this.hasGem.length - 1)
  }

  getRows() {
    return this.createRange(this.hasGem[0].length - 1);
  }
}