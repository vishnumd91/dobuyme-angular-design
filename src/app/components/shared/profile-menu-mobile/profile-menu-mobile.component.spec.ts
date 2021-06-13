import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMenuMobileComponent } from './profile-menu-mobile.component';

describe('ProfileMenuMobileComponent', () => {
  let component: ProfileMenuMobileComponent;
  let fixture: ComponentFixture<ProfileMenuMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMenuMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMenuMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
