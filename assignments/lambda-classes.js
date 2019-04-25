// CODE here for your Lambda Classes
class Person {
    constructor(attributes) {
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
  }
speak() {
       console.log(`Hello my is ${this.name}, I am from ${this.location}`);
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
       console.log(`Today we are learning about ${this.subject}`);
        }
         grade(student, subject) {
            console.log(`${student.name} receives a perfect score on ${this.subject}`);
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
    console.log (`${this.name} has submitted a PR for ${this.subject}`)
    }
    sprintChallenge(subject) {
        console.log(`${this.name} has started the sprint challenge for ${this.subject}`)
        }
        listsSubjects() {
            return this.favSubjects;
         }
}



class PM extends Student {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstuctor = attributes.favInstuctor;

    }
   standUp(channel){
       console.log(`${this.name} announces to ${channel} @channel study times!`)
   }
   debugsCode(student, subject){
       console.log(`${this.name} is debugging ${student}'s work on ${subject}`)

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



const Hacker = new PM( {
    name: "Hacker",
    gradClassName:"University of The world",
    location: "ohio",
    favInstuctor: "Keiran Kozlowski",

})


Keiran.demo('python')
console.log(Keiran.catchPhrase)
Elijah.PRAssignment("Java");
Elijah.sprintChallenge('Python')
console.log(Elijah.location)
console.log(Elijah.listsSubjects())
console.log(Hacker.standUp("Elijah"))
console.log(Hacker.debugsCode("Elijah"))
console.log(Hacker.speak("Elijah"))