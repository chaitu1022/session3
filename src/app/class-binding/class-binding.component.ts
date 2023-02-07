import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {

  isboldclass = false;
  strCls = 'boldClass italicsClass colorClass';
  objCls: any = {'boldClass': true, 'italicsClass': true, 'colorClass': true};
  arrCls = ["boldClass", "italicsClass"]

  getClass(): any {
   // this.objCls.colorClass = true;
    return {'boldClass': true, 'italicsClass': true, 'colorClass': true};
    
  }

  changeStatus() {
    this.arrCls.push("colorClass");
  //  this.objCls['boldClass'] = false;
    console.log(this.objCls);
  }
 
}
