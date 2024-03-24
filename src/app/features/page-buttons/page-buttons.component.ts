import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-buttons',
  standalone: true,
  imports: [],
  template: `<div class="page-button">
    <button type="button" class="next-button" (click)="onPreviousClick()">
      Previous
    </button>
    <button type="button" class="previous-button" (click)="onNextClick()">
      Next
    </button>
  </div>`,
  styles: `
  .page-button{
    display: flex;
    justify-content: space-between;
    margin-inline: 10rem;
    gap: 4rem;
    button{
        background-color: #1d2b5d;
    padding: 1rem 3rem 1rem 3rem ;
    border-radius: 1rem;
    color:  #fbcb04;
    border: 0;
    font-weight: 600;
    border-top: 2px solid  #fbcb04;
    border-left: 2px solid  #fbcb04;
    cursor: pointer;
    &:hover{
      border-bottom: 2px solid #fbcb04;
      border-right:2px solid #fbcb04;
      border-top: 0;
      border-left: 0;
    }
  }
}`,
})
export class PageButtonsComponent {
  @Output() nextClicked = new EventEmitter<void>();
  @Output() previousClicked = new EventEmitter<void>();
  onNextClick() {
    this.nextClicked.emit();
  }
  onPreviousClick() {
    this.previousClicked.emit();
  }
}
