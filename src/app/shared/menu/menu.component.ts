import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  template: `
    <nav>
      <ul>
        <li><a href="#">Pokemon</a></li>
        <li><a href="#">Details</a></li>
        <li><a href="#">Favourites</a></li>
      </ul>
    </nav>
  `,
  styles: `
  ul{
    display: flex;
    list-style: none;
    justify-content: space-between;
    gap: 4rem;
    padding-right: 1.5rem;
    a{
      text-decoration: none;
      color: #fbcb04 ;
      font-weight: 600;
      &:hover{
        border-bottom: 2px solid #fbcb04;
        border-right:2px solid #fbcb04;
        border-radius: 1rem ;
        padding: 1rem;
      }
    }
  }
  `,
})
export class MenuComponent {}
