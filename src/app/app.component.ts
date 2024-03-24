import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { PokehomeComponent } from './features/pokehome/pokehome.component';
import { PageButtonsComponent } from './features/page-buttons/page-buttons.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PokehomeComponent,
    PageButtonsComponent,
  ],
})
export class AppComponent {
  title = 'Challenge05Week4';
}
