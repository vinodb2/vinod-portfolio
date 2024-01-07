import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';
import { ProfileService } from '../profile.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsComponent ],
      imports: [ HttpClientTestingModule ], // Import the testing module for HttpClient
      providers: [ ProfileService ], // Add your service as a provider
    })
   
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
