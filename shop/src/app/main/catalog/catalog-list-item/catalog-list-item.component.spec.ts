import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogListItemComponent } from './catalog-list-item.component';

describe('CatalogListItemComponent', () => {
  let component: CatalogListItemComponent;
  let fixture: ComponentFixture<CatalogListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogListItemComponent]
    });
    fixture = TestBed.createComponent(CatalogListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
