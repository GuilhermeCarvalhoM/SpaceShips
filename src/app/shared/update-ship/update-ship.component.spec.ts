import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShipComponent } from './update-ship.component';

describe('UpdateShipComponent', () => {
  let component: UpdateShipComponent;
  let fixture: ComponentFixture<UpdateShipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateShipComponent]
    });
    fixture = TestBed.createComponent(UpdateShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
