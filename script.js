//complete this code
class Person {
	constructor(name,age){
		this.PersonName = name;
		this.PersonAge = age;
	}
	get name(){
		return this.PersonName;
	}

	/**
   * @param {any} age
   */

	set age(age){
		this.PersonAge = age;
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
	
}

class Teacher extends Person {

	teach(){
		console.log(`${this.name} is teaching`);
	}
	
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
