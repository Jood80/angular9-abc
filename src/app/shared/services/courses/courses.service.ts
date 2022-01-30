import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses = [
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

  all() {
    return this.courses;
  }

  find(courseId: number) {}

  create(course: any) {
    console.log('CREATE COURSE', course);
  }

  update(course: any) {
    console.log('Update COURSE', course);
  }

  delete(courseId: number) {
    console.log('CREATE COURSE', courseId);
  }
}
