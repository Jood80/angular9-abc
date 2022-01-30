import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  currentCourse = null;

  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'Javascript Fundamentals',
      description: 'Learn the hard parts of Javascript',
      percentComplete: 20,
      favorite: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  selectCourse(course: any) {
    this.currentCourse = course;
  }

  deleteCourse(courseId: any) {
    console.log('COURSE DELETED!', courseId);
  }
}
