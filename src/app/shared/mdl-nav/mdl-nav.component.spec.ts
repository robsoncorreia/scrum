
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MdlNavComponent } from './mdl-nav.component';

describe('MdlNavComponent', () => {
  let component: MdlNavComponent;
  let fixture: ComponentFixture<MdlNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [MdlNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdlNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
