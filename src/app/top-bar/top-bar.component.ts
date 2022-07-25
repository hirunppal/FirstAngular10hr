import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  constructor() {}
  public isDisable: boolean = false;
  public handleOnclick() {
    this.isDisable = !this.isDisable;
    console.log(this.isDisable);
  }

  public myInput: string = '';
  public handleOnInput(event: any) {
    console.log(event.target.value);
    this.myInput = event.target.value;
    // alert('LOL');
  }
  public newInput: string = '';
  ngOnInit() {}
}
