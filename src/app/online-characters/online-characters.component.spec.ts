import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineCharactersComponent } from './online-characters.component';

describe('OnlineCharactersComponent', () => {
  let component: OnlineCharactersComponent;
  let fixture: ComponentFixture<OnlineCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnlineCharactersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
