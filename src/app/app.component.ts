import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetExample } from './to-bottomsheet/bottom-sheet-example';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private bottomSheet: MatBottomSheet) {
  }
  showBottomSheet() {
    this.bottomSheet.open(BottomSheetExample);
  }
}
