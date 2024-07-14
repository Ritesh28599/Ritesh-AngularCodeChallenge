import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNodeComponent } from './menu-node.component';

describe('MenuNodeComponent', () => {
  let component: MenuNodeComponent;
  let fixture: ComponentFixture<MenuNodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuNodeComponent]
    });
    fixture = TestBed.createComponent(MenuNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
