import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokelistComponent } from './pokelist.component';

describe('PokelistComponent', () => {
  let component: PokelistComponent;
  let fixture: ComponentFixture<PokelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
