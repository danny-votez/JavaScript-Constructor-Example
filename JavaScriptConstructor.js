// In JavaScript, object constructors are impotant
// A constructor is a function that creates an instance of a class which is typically called an “object
// The purpose of a constructor is to create an object and set values if there are any object properties present

function Elizabeth (name, profession, age, siblings, education){
    // In this case, Elizabeth forms the Object Constructor
    // As good practice, starting Object construtors with first upper case letter is encouraged
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.siblings = siblings;
    this.education = education;
}

// creating a new object now
// This is done through calling the previously created constructor element, with the 'new' keyword

// it is good practice to create objects using 'const' keyword
const herInfo = new Elizabeth('Elizabeth The Queen', 'Designer', 24, 2, 'Mcensal Design School - Nairobi');

// We can now access the individual elements using the following statements
console.log(herInfo.name);
console.log(herInfo.education);
console.log(herInfo.profession);


// For accessing all the information, we then adopt the following command
console.log(herInfo);


/* =========RESULTS========


Elizabeth The Queen
Mcensal Design School - Nairobi
Designer
Elizabeth {
  name: 'Elizabeth The Queen',
  profession: 'Designer',
  age: 24,
  siblings: 2,
  education: 'Mcensal Design School - Nairobi'
}

*/