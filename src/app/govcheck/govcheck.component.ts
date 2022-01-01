import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ShowCheck} from '../models/component.modal'
@Component({
  selector: 'app-govcheck',
  templateUrl: './govcheck.component.html',
  styleUrls: ['./govcheck.component.scss']
})
export class GovChkComponent implements OnInit {
  @Input() inputstr:string;
  @Output() outId:EventEmitter<string[]> = new EventEmitter<string[]>();
  public ids=[];
  constructor() { }

  ngOnInit() {
    
  }
  mockList:ShowCheck[] = [{id:'1',name:'check1'},{id:'2',name:'check2'}];

  onCheck(event:Event){
    let el = (event.target as HTMLInputElement);
    var ids=[];
    var lst = document.getElementsByTagName('input');
    [].forEach.call(lst, function(el){
      if(el.checked)
      ids.push(el.value);
    });
    this.outId.emit(ids);
  }
}
