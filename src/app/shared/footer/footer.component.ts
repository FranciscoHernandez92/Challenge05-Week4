import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <address>© Copyright PokeChallenge, 2024</address>
    </footer>
  `,
  styles: `
  footer{
    background-color: #3166ae ;
    border-radius: 1rem;
    color: #fbcb04 ;
    margin: 2rem;
  }
  address{
    display: flex;
    justify-content: center;
    padding: 1rem
  }
  `,
})
export class FooterComponent {}
