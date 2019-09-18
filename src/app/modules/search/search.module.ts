import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { UsercontrolModule } from 'src/app/shared/user-controls/usercontrol.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    MaterialModule,
    UsercontrolModule,
    FormsModule
  ]
})
export class SearchModule { }
