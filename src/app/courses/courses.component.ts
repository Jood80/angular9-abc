import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses/courses.service';

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
  courses: any = null;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.loadCourses();
  }

  loadCourses() {
    this.coursesService.all().subscribe((courses) => (this.courses = courses));
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
    this.coursesService.delete(courseId).subscribe(this.loadCourses);
  }

  saveCourse(course: any) {
    if (course.id) {
      this.coursesService.update(course).subscribe(this.loadCourses);
    } else {
      this.coursesService.create(course).subscribe(this.loadCourses);
    }
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
