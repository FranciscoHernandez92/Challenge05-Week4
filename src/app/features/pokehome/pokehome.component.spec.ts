import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokehomeComponent } from './pokehome.component';

describe('PokehomeComponent', () => {
  let component: PokehomeComponent;
  let fixture: ComponentFixture<PokehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokehomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
