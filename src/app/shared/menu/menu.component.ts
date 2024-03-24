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
    justify-content:center;
    gap: 4rem;
    padding-right: 1.5rem;
    a{
      background-color:#1d2b5d;
      text-decoration: none;
      color: #fbcb04 ;
      font-weight: 600;
      border-radius: 1rem ;
      border-top: 2px solid  #fbcb04;
      border-left: 2px solid  #fbcb04;
      padding: 1rem;
      &:hover{
        border-bottom: 2px solid #fbcb04;
        border-right:2px solid #fbcb04;
        border-top: 0;
        border-left: 0;
      }
    }
  }
  `,
})
export class MenuComponent {}
