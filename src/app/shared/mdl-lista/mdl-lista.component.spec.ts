import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdlListaComponent } from './mdl-lista.component';

describe('MdlListaComponent', () => {
  let component: MdlListaComponent;
  let fixture: ComponentFixture<MdlListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdlListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdlListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
