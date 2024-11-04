import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() childData!: string;
  @Output() dataEmitter = new EventEmitter<string>(); 

  sendDataToParent() {
    this.dataEmitter.emit('Data from Child!');
  }
}
