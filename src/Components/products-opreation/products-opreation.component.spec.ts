import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOpreationComponent } from './products-opreation.component';

describe('ProductsOpreationComponent', () => {
  let component: ProductsOpreationComponent;
  let fixture: ComponentFixture<ProductsOpreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsOpreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsOpreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
