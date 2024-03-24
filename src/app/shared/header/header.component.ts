import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <header>
      <h1>
        <img
          width="300px"
          src="../assets/pokemon-logo (1).svg"
          alt="pokemon logo"
        />
      </h1>
      <ng-content></ng-content>
    </header>
  `,
  styles: `
  header{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color:#3166ae;
    border-radius: 1rem;
    padding: 2rem;
    h1{
      display: flex;
      justify-content: center;
    }
  }
  `,
})
export class HeaderComponent {}
