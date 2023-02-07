import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent {
  fontSize: string = "30px";
  numfontSize: number = 30;
  strStyles = "color:red;border:1px solid red;"
  isItalic: boolean = true;
  isBold: boolean = true;

  styles = {
    'font-weight': this.isBold ? 'bold' : 'normal',
    'font-style': this.isItalic ? 'italic' : 'normal',
    'font-size': this.fontSize
  };

  addStyles() {    
    return this.styles;
  }

  statusChange() {
    this.styles["font-weight"] = "normal";
  }
}
