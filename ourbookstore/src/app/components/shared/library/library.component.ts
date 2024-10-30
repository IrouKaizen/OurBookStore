import { Component } from '@angular/core';
import { LibTopbarComponent } from './lib-topbar/lib-topbar.component';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [LibTopbarComponent],
  templateUrl: './library.component.html',
  styles: ``
})
export default class LibraryComponent {

}
