import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comp-test',
  templateUrl: './comp-test.component.html',
  styleUrls: ['./comp-test.component.scss']
})
export class CompTestComponent implements OnInit {

  @Input() appareilName: string;
  @Input()  appareilStatus: string;

  var1 = 'totor';
  constructor() { }

  ngOnInit(): void {
  }

  getStatus(){
    return this.appareilStatus;
  }
  getColor() {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

}
