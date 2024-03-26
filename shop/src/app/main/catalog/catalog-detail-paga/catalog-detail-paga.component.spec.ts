import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogDetailPagaComponent } from './catalog-detail-paga.component';

describe('CatalogDetailPagaComponent', () => {
  let component: CatalogDetailPagaComponent;
  let fixture: ComponentFixture<CatalogDetailPagaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogDetailPagaComponent]
    });
    fixture = TestBed.createComponent(CatalogDetailPagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
