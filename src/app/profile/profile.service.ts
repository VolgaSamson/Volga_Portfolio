import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Capital Marketing',
      role: 'Full Stack Developer ',
      desc: 'Developed web based application for TMX Group Limited which is a canadian financial services company that operates equity,fixed income,derivatives, and energy markets exchanges',
      tech: 'Angular,Java,SQL'
    },

    {
      id: 2,
      title: 'Home Health Provisioning System',
      role: 'Frontend Developer',
      desc: 'Project aimed at providing better online medical consultation and hospital management facilities',
      tech: 'PHP and MS SQL '
    },
    {
      id: 3,
      title: 'Book-app',
      role: 'Frontend Developer',
      desc: 'Simple book app where user is able to create and delete list of books and see all available books',
      tech: 'Angular'
    },


    
  ]
  about2 = `Full Stack Developer with 3+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 7+ All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Python, Jquery, Bootstrap, MongoDB, Firebase, and MYSQL`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "assets/Volga_Resume(g) (2).pdf"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 7+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '50%'
    },
    {
      'id': '3',
      'skill': 'JAVA,JAVASCRIPT',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'HTML,CSS,SASS,SCSS',
      'progress': '90%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'AJAX,GIT,JIRA',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2014 - 2018',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Engineering,Computer Science',
      'info': `Completed B.Tech in Computer Engineering with 7.85 CGPA.`,
      'institution': 'School Of Engineering, CUSAT'
    },
    {
      'id': '2',
      'from_to_year': '2012 - 2014',
      'education': 'Higher Secondary',
      'stream': 'Bio Maths',
      'institution': 'St.Teresa\'s C.G.H.S.S ',
      'info': `Completed my high school with 95%.`
    },
    {
      'id': '3',
      'from_to_year': '2011 - 2012',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'St.Mary\'s C.G.H.S.S ',
      'info': `
Completed my Secondary school with 95%.`
    }
  ];
  exprienceData: any = [
   
    {
      id: 1,
      company: 'Tata Consultancy Services',
      location: 'Chennai,India',
      timeline: 'Jan 2020 - Apr 2023',
      role: 'System Engineer (Full Stack Developer)',
      work: `Technologies : Angular , Java , SQL .

Developed highly visible web app for banking and financial services using Angular7,Node,TypeScript and backend interface with Java .

In short span of time, implemented components such as Issuer Services,Corporate Action,Holders of Record,Shareholder Meeting which are some of the complex areas in share market .

Worked closely with customers in a tight feedback loop to validate the analytics product offering .

Built extensive test coverage for all new features which reduced the number of customer complaints .

Worked within an agile team and helped prioritize and scope feature requests to ensure that the biggest impact features were worked on first 
  `
    },


  ]

    // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  
}
