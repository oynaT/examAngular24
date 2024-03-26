import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogNewPageComponent } from './catalog-new-page.component';

describe('CatalogNewPageComponent', () => {
  let component: CatalogNewPageComponent;
  let fixture: ComponentFixture<CatalogNewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogNewPageComponent]
    });
    fixture = TestBed.createComponent(CatalogNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
