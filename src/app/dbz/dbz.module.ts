import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { mainPageDbz } from './pages/main-page.component';
import { ListlComponent } from './components/listl/listl.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';


@NgModule({
  declarations: [
    mainPageDbz,
    ListlComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    mainPageDbz
  ]
})
export class DbzModule { }
