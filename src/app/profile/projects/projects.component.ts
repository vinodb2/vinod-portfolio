import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  config: any;
  projects: any =[];

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
   
  }

  
}
