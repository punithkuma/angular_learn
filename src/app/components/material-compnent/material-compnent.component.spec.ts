import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCompnentComponent } from './material-compnent.component';

describe('MaterialCompnentComponent', () => {
  let component: MaterialCompnentComponent;
  let fixture: ComponentFixture<MaterialCompnentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialCompnentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
