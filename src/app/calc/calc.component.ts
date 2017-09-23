import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  val1:number = 10;
  val2:number = 20;
  ans:number = 0;

  constructor() { }

  ngOnInit() {
  }

  add(event){

    this.ans = Number(this.val1) + Number(this.val2);

  }

  sub(event){

    this.ans = Number(this.val1) - Number(this.val2)

  }

  mul(event){

    this.ans = Number(this.val1) * Number(this.val2)

  }

  div(event){

    this.ans = Number(this.val1) / Number(this.val2)

  }

}
