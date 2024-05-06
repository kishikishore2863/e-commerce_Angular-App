import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodykpscComponent } from './bodykpsc.component';

describe('BodykpscComponent', () => {
  let component: BodykpscComponent;
  let fixture: ComponentFixture<BodykpscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodykpscComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodykpscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
