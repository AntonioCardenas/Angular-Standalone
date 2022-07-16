import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vista1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vista1.component.html',
  styleUrls: ['./vista1.component.css']
})
export class Vista1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
