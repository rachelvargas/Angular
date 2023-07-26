import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptureMasteryComponent } from './scripture-mastery.component';

describe('ScriptureMasteryComponent', () => {
  let component: ScriptureMasteryComponent;
  let fixture: ComponentFixture<ScriptureMasteryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScriptureMasteryComponent]
    });
    fixture = TestBed.createComponent(ScriptureMasteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
