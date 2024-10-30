import { BookInterface } from './../../../../models/bookinterface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-user-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './simple-user-dashboard.component.html',
  styles: ``
})
export class SimpleUserDashboardComponent {

  public listbook:BookInterface[] = [
    {
      bookid:1,
      bookname:'Alloa',
      bookprice:54.99,
      bookphotolink: 'https://bookvillage.app/_next/image?url=https%3A%2F%2Fbookvillage.s3.eu-west-3.amazonaws.com%2Fphotos%2Fbooks%2Fcovers%2F9782290254738.jpg&w=256&q=70'
    }
  ]
}
