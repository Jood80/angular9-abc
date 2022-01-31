import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent {
  selectedCourse: any;
  originalTitle: any;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set course(value: any) {
    if (value) {
      this.selectedCourse = Object.assign({}, value);
      this.originalTitle = value.title;
    }
  }
}
