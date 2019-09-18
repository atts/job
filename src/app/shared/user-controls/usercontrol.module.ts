import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';


@NgModule({
  declarations: [HeaderComponentComponent, FooterComponentComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponentComponent, FooterComponentComponent]
})
export class UsercontrolModule { }
