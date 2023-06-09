import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertShipsComponent } from './insert-ships.component';

describe('InsertShipsComponent', () => {
  let component: InsertShipsComponent;
  let fixture: ComponentFixture<InsertShipsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertShipsComponent]
    });
    fixture = TestBed.createComponent(InsertShipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
