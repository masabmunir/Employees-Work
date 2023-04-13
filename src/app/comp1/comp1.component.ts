import {Component, HostBinding, HostListener, Input} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  @Input() item = '';

  @Output() newItemEvent = new EventEmitter<string>();

  @HostBinding('style.color') color:any;
  @HostListener('click') myClick(){
    this.color =  'blue';
  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
