import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gem',
  templateUrl: './gem.component.html',
  styleUrls: ['./gem.component.css']
})
export class GemComponent implements OnInit {
  private _type : number;
  imageStr = "";

  @Input()
  set gemType(type: number) {
    this.imageStr = "gem" + type + ".png";
  }

  constructor() { }

  ngOnInit() {
    
  }
}