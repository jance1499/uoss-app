import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedwalkAddComponent } from './speedwalk-add.component';

describe('SpeedwalkAddComponent', () => {
  let component: SpeedwalkAddComponent;
  let fixture: ComponentFixture<SpeedwalkAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedwalkAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedwalkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
