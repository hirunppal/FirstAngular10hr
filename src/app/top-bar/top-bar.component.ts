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
    // this.isDisable = !this.isDisable;

    // console.log(this.isDisable);
    if (this.isAnyBlock.length < 10) {
      const newArr = this.isAnyBlock.push(1);
      // return (this.isAnyBlock = [newArr]);
    } else {
      this.isAnyBlock = [];
    }
    console.log(this.isAnyBlock);
  }

  public myInput: string = '';
  public isAnyBlock: Array<any> = [];
  isArremp() {
    return this.isAnyBlock.length > 0 ? true : false;
  }
  public handleOnInput(event: any) {
    console.log(event.target.value);
    this.myInput = event.target.value;
    // alert('LOL');
  }
  public newInput: string = '';
  ngOnInit() {}
}
