import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFilmeComponent } from './update-filme.component';

describe('UpdateFilmeComponent', () => {
  let component: UpdateFilmeComponent;
  let fixture: ComponentFixture<UpdateFilmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFilmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
