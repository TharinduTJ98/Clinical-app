import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBannerComponent } from './client-banner.component';

describe('ClientBannerComponent', () => {
  let component: ClientBannerComponent;
  let fixture: ComponentFixture<ClientBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientBannerComponent]
    });
    fixture = TestBed.createComponent(ClientBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
