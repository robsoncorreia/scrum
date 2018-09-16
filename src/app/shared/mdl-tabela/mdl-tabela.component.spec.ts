
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdlTabelaComponent } from './mdl-tabela.component';

describe('MdlTabelaComponent', () => {
  let component: MdlTabelaComponent;
  let fixture: ComponentFixture<MdlTabelaComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MdlTabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdlTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
