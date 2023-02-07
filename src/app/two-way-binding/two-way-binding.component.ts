import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  enteredName = "Demo";

  emp = { firstName: "demo" }

  onInputChange(e: any) {
    this.enteredName = e.target.value;
  }

  ReadValue() {
    console.log(this.enteredName);
  }
}
