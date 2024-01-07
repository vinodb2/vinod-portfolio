import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;
    });
  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'personal-portfoli-angular'`, () => {
    expect(app.title).toEqual('personal-portfoli-angular');
  });

  it('should render router-outlet', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
});
