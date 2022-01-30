import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
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
}
