import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  checkBoxId(stc:string[]){
    this.title='';
    stc.forEach(e=>{
      this.title=this.title+e;
    });
    
  }
}
