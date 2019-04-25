// CODE here for your Lambda Classes


class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
  }
speak() {
       console.log(`Hello my is ${this.name}, I am from ${location}`);
        }
    };


class Instructor extends Person {
    constructor(attributes) {
        super(attributes);
            this.specialty = attributes.specialty;
            this.favLanguage = attributes.favLanguage;
            this.location = attributes.location;
            this.catchPhrase = attributes.catchPhrase;
  }
demo(subject) {
       console.log(`Today we are learning about ${subject}`);
        }
         grade(student, subject) {
            console.log(`${student.name} receives a perfect score on ${subject}`);
             }
         };
      

class Student extends Instructor {
    constructor(attributes){
        super(attributes);
            this.previousBackground = attributes.previousBackground;
            this.className = attributes.className;
            this.favSubjects = attributes.favSubjects
 }
 PRAssignment(subject) {
    console.log (`${student.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${student.name} has started the sprint challenge for ${subject}`)
        }
        listsSubjects() {
            return this.favSubjects
         }
}


const Keiran = new Instructor ({
    name:"Keiran",
    location: "America",
    age: 24,
    favLanguage: "Python",
    catchPhrase: "Well, Blokes were done for the day and Bob's your uncle",


})

const Elijah = new Student ({
    name:"Elijah",
    location:"West Virginia",
    age:28,
    grade:90,
    favSubjects :['Javascript', "SASS", "HTML"]

})

const Bob = new Student({
    name:"Bob",
    location:"New York",
    grade:15,
    favSubjects:["CSS", "Geometry", "Python"]
})