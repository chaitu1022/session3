import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  enteredValue = "";

  hideandshow = false;

  onInputChange(e: any) {
  console.log(e.target.value);
  }

  valuechanged() {
    console.log("this is called");
  }

  changeEvent() {
    this.hideandshow = !this.hideandshow;
  }
}
