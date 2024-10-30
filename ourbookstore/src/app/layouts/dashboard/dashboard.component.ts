import { Component } from '@angular/core';
import { AdminDashboardComponent } from '../../components/admin/admin-dashboard/admin-dashboard.component';
import { SellerDashboardComponent } from '../../components/users/Seller/seller-dashboard/seller-dashboard.component';
import { SimpleUserDashboardComponent } from '../../components/users/simple-user/simple-user-dashboard/simple-user-dashboard.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AdminDashboardComponent, SellerDashboardComponent, SimpleUserDashboardComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {

}
