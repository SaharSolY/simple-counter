import { Component } from '@angular/core';
import { Person } from '../../shared/model/person';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  currentPerson : Person = new Person("Dan","Levy","dan@ss",24);
}