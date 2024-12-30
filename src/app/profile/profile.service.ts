import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  constructor(private http: HttpClient) {}

 
  about2 = `Software Developer with 2 years of experience.
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies.
  Expertise in Angular 2+ All versions, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of ,Jquery, Bootstrap and MYSQL .
  Improved application performance through Angular 7 Component-based development .
  Implemented HTTP requests using RxJS Observable library and designed UI components with Angular Material`

  about =
    "Proficient in Angular frameworks, I excel in creating single-page applications and have expertise in CSS preprocessors like SCSS and SASS. My background includes working with Git, Bitbucket, and utilizing debugging tools like Karma and Jasmine.I've contributed to projects for renowned clients in the K-12 Education sector, demonstrating adaptability in Agile environments. My skill set also encompasses technologies such as ASP.NET Core, Azure, and SQL Server, emphasizing a comprehensive approach to front-end development.";
  resumeUrl = 'assets/images/vinod_resume-2.pdf';

  skillsData: any = [
    {
      id: '1',
      skill: 'HTML,CSS',
      progress: '85%',
    },
    {
      id: '2',
      skill: 'Bootstrap and PrimeNg',
      progress: '85%',
    },
    {
      id: '3',
      skill: 'JAVASCRIPT JQUERY',
      progress: '80%',
    },
    {
      id: '4',
      skill: 'ANGULAR 2,5,7,9,11',
      progress: '85%',
    },
    {
      id: '5',
      skill: 'NODE JS',
      progress: '80%',
    },

    {
      id: '6',
      skill: 'SQL , MYSQL,',
      progress: '75%',
    },
  ];

  educationData: any = [
    {
      id: '1',
      from_to_year: '2015 - 2019',
      education: "Bachelor's Degree",
      stream: 'Bachelor of Engineering',
      info: `Aditya Engineering college.`,
      institution: 'ADITYA ENGINEERING COLLEGE, SURAMPALEM',
    },
    {
      id: '2',
      from_to_year: '2013 - 2015',
      education: 'Higher Secondary',
      stream: 'Science and Mathematics',
      institution: 'NARAYANA JUNIOR COLLEGE',
      info: `The High School was mainly focus on the bases of science, mathematics, and Chemistry.Completed my higher secondary school with 86%.`,
    },
    {
      id: '3',
      from_to_year: '2012 - 2013',
      education: 'Secondary  School',
      stream: 'Science and Mathematics',
      institution: 'VIVEKANANDA VIDYANIKETAN,MANDASA',
      info: `The Secondary aims at Maths , English , Science, Social Science, Literature and Languages.
Completed my Secondary school with 70%.`,
    },
  ];
  experienceData: any = [
    {
      id: 2,
      company: 'LearningMate solutions PVT LTD',
      location: 'Mumbai',
      timeline: 'March 2022- December 2022',
      role: 'Software Engineer',
      work: `Responsible for handling the UI in Angular and Managing the api calls . 
      Building reusable components that could be utilized in different locations throughout the application using a variety of custom directives in Angular 9 .
      Working experience in Agile development environments and familiarity with Scrum processes, and ability to adapt to changing project requirements and priorities .
      Utilized AJAX, JSON for functionality testing and data exchange between browsers and servers`
    },
    {
      id: 1,
      company: 'NBE technologies',
      location: 'Pune',
      timeline: 'Jan 2020 to Mar 2022',
      role: 'Associate Engineer',
      work: `Technologies : Angular , Node JS , MySQL  .
      Worked on the web application built in Angular for different business and Campaigns .
      Developed UI pages using Angular 5, HTML5, CSS3, JavaScript, Prime NG, and Bootstrap .
      Utilized NgRx for managing Angular application .
      Utilized NPM scripts for build and test environments in Nodejs .
      Contributed on developing the admin dashboard with different charts and insights for the application`
    },
  ];


  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  experience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'experience');
    return this.experienceData;
  }
}
