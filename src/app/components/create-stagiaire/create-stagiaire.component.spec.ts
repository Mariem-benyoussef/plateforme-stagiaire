import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStagiaireComponent } from './create-stagiaire.component';

describe('CreateStagiaireComponent', () => {
  let component: CreateStagiaireComponent;
  let fixture: ComponentFixture<CreateStagiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateStagiaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
