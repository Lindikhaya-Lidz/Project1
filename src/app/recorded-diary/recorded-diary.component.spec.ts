import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordedDiaryComponent } from './recorded-diary.component';

describe('RecordedDiaryComponent', () => {
  let component: RecordedDiaryComponent;
  let fixture: ComponentFixture<RecordedDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordedDiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordedDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
