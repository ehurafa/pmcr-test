import {NgModule} from '@angular/core';

import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,  
  MatCardModule,
  MatButtonModule,
  MatTableModule,  
  MatDialogModule,
  MatInputModule,
  
} from '@angular/material';


@NgModule({
  imports: [
	MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
	MatCardModule,
	MatButtonModule,
	MatTableModule,
	MatDialogModule,
	MatInputModule,
],
  exports: [
	MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
	MatCardModule,
	MatButtonModule,
	MatTableModule,
	MatDialogModule,
	MatInputModule,
  ]
})
export class MaterialModule {}