import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/users/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, RouterOutlet],
  templateUrl: './home.component.html',
})
export default class HomeComponent {}
