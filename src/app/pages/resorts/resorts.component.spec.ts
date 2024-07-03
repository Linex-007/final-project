import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortsComponent } from './resorts.component';

describe('ResortsComponent', () => {
  let component: ResortsComponent;
  let fixture: ComponentFixture<ResortsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResortsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
