import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedwalksComponent } from './speedwalks.component';

describe('SpeedwalksComponent', () => {
  let component: SpeedwalksComponent;
  let fixture: ComponentFixture<SpeedwalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedwalksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedwalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
