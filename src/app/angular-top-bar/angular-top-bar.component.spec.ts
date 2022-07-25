import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTopBarComponent } from './angular-top-bar.component';

describe('AngularTopBarComponent', () => {
  let component: AngularTopBarComponent;
  let fixture: ComponentFixture<AngularTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularTopBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
