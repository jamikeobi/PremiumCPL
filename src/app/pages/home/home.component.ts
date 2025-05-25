import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // Delete Form Data by ID
  showConfirmDialog = false;

  toggleConfirmDialog() {
    this.showConfirmDialog = !this.showConfirmDialog;
  }

  
  cancelDelete() {
    this.showConfirmDialog = false;
  }
}
