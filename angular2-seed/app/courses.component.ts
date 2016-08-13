import {Component} from 'angular2/core'

import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
    selector: 'courses',
    providers: [CourseService],
    directives: [AutoGrowDirective],
    template:   `<h2>Courses</h2>
                <p>{{ title }}</p>
                <input type="text" autoGrow />
                <ul>
                    <li *ngFor="#course of courses">
                        {{ course }}
                    </li>
                </ul>
                `
})
export class CoursesComponent{
    title: string = "The title of courses page";
    courses;

    constructor(courseService: CourseService){
        this.courses = courseService.getCourses();
    }
}