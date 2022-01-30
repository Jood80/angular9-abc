import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const BASE_URL = `http://localhost:3000/`;

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private model = 'courses';

  constructor(private http: HttpClient) {}

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }
  private getUrlById(id: number) {
    return `${this.getUrl()}/${id}`;
  }

  all() {
    return this.http.get(this.getUrl());
  }

  find(courseId: number) {
    return this.http.get(`${this.getUrl()}${courseId}`);
  }

  create(course: any) {
    return this.http.post(this.getUrl(), course);
  }

  update(course: any) {
    return this.http.patch(this.getUrlById(course.id), course);
  }

  delete(courseId: number) {
    return this.http.delete(this.getUrlById(courseId));
  }
}
