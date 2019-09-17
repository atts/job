import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { SidenavComponentComponent } from './sidenav-component/sidenav-component.component';



@NgModule({
  declarations: [HeaderComponentComponent, FooterComponentComponent, SidenavComponentComponent],
  imports: [
    CommonModule
  ]
})
export class UsercontrolModule { }
