import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsGridsComponent } from './news-grids.component';

describe('NewsGridsComponent', () => {
  let component: NewsGridsComponent;
  let fixture: ComponentFixture<NewsGridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsGridsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
