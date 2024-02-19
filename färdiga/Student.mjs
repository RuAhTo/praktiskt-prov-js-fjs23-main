export class Student{
    constructor(fullname){
        this.fullname = fullname;
        this.courses = [];
    }
    registerCourse(course){
        return this.courses.push(course);
    }
    listCourses(){
        return console.log(this.courses);
    }
}