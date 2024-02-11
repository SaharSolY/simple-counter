import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
    productName = "strawberry";
      price = 50;
      quantity = 80;
      getTodayDateAsString(): string {
        const today = new Date();
        return today.toLocaleDateString();
    }
    }

    
