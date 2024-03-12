import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentuiComponent } from './studentui.component';

describe('StudentuiComponent', () => {
  let component: StudentuiComponent;
  let fixture: ComponentFixture<StudentuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentuiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
