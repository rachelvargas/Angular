import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptureItemComponent } from './scripture-item.component';

describe('ScriptureItemComponent', () => {
  let component: ScriptureItemComponent;
  let fixture: ComponentFixture<ScriptureItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScriptureItemComponent]
    });
    fixture = TestBed.createComponent(ScriptureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
