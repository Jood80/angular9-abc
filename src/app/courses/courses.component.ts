import { Component, OnInit } from '@angular/core';

const CourseInfoDTO = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  selectedCourse = CourseInfoDTO;

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

  ngOnInit(): void {
    this.resetSelectedCourse();
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };
    this.selectedCourse = emptyCourse;
  }

  selectCourse(course: any) {
    this.selectedCourse = course;
  }

  deleteCourse(courseId: any) {
    console.log('COURSE DELETED!', courseId);
  }

  saveCourse() {
    console.log('SAVE COURCE!');
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
