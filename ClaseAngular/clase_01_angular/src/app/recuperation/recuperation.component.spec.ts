import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperationComponent } from './recuperation.component';

describe('RecuperationComponent', () => {
  let component: RecuperationComponent;
  let fixture: ComponentFixture<RecuperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecuperationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecuperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
