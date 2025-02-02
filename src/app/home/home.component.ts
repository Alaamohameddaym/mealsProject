import { NgFor, CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MeelsService } from '../services/name.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: string[] = [
    'All', 'Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat',
    'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood',
    'Side', 'Starter', 'Vegan', 'Vegetarian'
  ];

  datalist: any[] = [];
  selectedCategory: string = 'All';

  constructor(private data: MeelsService) {}

  ngOnInit(): void {
    this.getdata();
  }

  onButtonClick(categoryName: string): void {
    this.selectedCategory = categoryName;
    this.getdata();
  }

  onSelectChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCategory = selectElement.value;
    console.log('Selected Category:', this.selectedCategory);
    this.getdata();
  }

  getdata(): void {
    console.log('Fetching data for:', this.selectedCategory);
    this.data.getmeels(this.selectedCategory).subscribe({
      next: (res: { meals: any[] }) => { 
        console.log('API Response:', res);
        this.datalist = res && res.meals ? res.meals : [];
      },
      error: (err: any) => {
        console.error('Error fetching data:', err);
        this.datalist = [];
      }
    });
  }
}
