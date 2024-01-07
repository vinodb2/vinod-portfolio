import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfileService } from '../profile.service';
import { SplitPipe } from '../split.pipe';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceComponent, SplitPipe ],
      imports: [ HttpClientTestingModule ], // Import the testing module for HttpClient
      providers: [ ProfileService ], // Add your service as a provider
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
