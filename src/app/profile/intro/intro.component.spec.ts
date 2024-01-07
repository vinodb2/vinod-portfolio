import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroComponent } from './intro.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfileService } from '../profile.service';

describe('IntroComponent', () => {
  let component: IntroComponent;
  let fixture: ComponentFixture<IntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroComponent ],
      imports: [ HttpClientTestingModule ], // Import the testing module for HttpClient
      providers: [ ProfileService ], // Add your service as a provider
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
