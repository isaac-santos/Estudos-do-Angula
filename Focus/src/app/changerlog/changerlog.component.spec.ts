import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerlogComponent } from './changerlog.component';

describe('ChangerlogComponent', () => {
  let component: ChangerlogComponent;
  let fixture: ComponentFixture<ChangerlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangerlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangerlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
