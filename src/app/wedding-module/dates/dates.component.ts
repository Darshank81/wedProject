import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-dates',
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: './dates.component.html',
  styleUrl: './dates.component.scss'
})
export class DatesComponent {

}
