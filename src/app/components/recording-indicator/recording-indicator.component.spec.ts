import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordingIndicatorComponent } from './recording-indicator.component';

describe('RecordingIndicatorComponent', () => {
  let component: RecordingIndicatorComponent;
  let fixture: ComponentFixture<RecordingIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordingIndicatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
