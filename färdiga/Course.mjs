export class Course{
    constructor(name, yhp){
        this.name = name;
        this.yhp = yhp;
    }
    getCourseInfo(){
        return console.log(`${this.name} ${this.yhp}`)
    }
}