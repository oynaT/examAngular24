import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogPageComponent } from './catalog-page.component';

describe('CatalogPageComponent', () => {
  let component: CatalogPageComponent;
  let fixture: ComponentFixture<CatalogPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogPageComponent]
    });
    fixture = TestBed.createComponent(CatalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
