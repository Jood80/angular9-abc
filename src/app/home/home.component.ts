import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../shared/services/lessons/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'This is title';
  currentLesson = null;
  courseLessons: any = null;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit(): void {
    this.courseLessons = this.lessonsService.all();
  }

  selectLesson(lesson: any) {
    console.log('SELECT Lesson fired!', lesson);
    this.currentLesson = lesson;
  }
}
