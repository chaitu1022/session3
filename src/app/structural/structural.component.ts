import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent {

  isShow = false;

  // employee: number[] = [1,2,3,4,5];

  onClick() {
    this.isShow = !this.isShow;
  }
}
