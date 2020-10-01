import {Component, Input, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-comp-test',
  templateUrl: './comp-test.component.html',
  styleUrls: ['./comp-test.component.scss']
})
export class CompTestComponent implements OnInit {

  @Input() appareilName: string;
  @Input()  appareilStatus: string;
  @Input() index: number;

  var1 = 'totor';
  constructor(private appareilService: AppareilService) { }

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
  onSwitch() {
    if(this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if(this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }
}
