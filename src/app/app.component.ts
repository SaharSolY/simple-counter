import { Component} from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { PersonComponent } from "./components/person/person.component";
import { Person } from './shared/model/person';
import { ButtonsComponent } from "./components/buttons/buttons.component";
import { PersonListComponent } from "./components/person-list/person-list.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HeaderComponent, PersonComponent, ButtonsComponent, PersonListComponent]
})
export class AppComponent {
  }


