import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WomenComponent } from '../women/women.component';
import { MenComponent } from '../men/men.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [RouterLink,WomenComponent,MenComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

}
