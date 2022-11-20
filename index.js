// console.info("page loaded");
// console.debug(23 + 2);
// console.warn(6 * 3 - 10);
// console.error("started");

//declar variabilele:
var myName = "Mihaela";
var age = 29;

//console.info("My name is " + myName + ", I'm " + age + " years old.");
age = 30;
//console.info("My name is " + myName + ", I'm " + age + " years old.");
age = 31;
//console.info("My name is " + myName + ", I'm " + age + " years old.");

// declar o variabila si ii dau un nume:
var jobTitle = "<span>Web Developer</span> @ RWS";

//cer elementul motto si il pastrez intr-o variabila:
var mottoElement = document.getElementById("motto");

//console.info("job: " + jobTitle);
//Afisez in consola tot elementul
console.info(mottoElement);
//Afisez in consola doar textul elementului(continutul HTML)
console.warn(mottoElement.innerHTML);
//atribui lui mottoElement.innerHTML valoarea lui jobTitle
//mottoElement.innerHTML = mottoElement.innerHTML + " & " + jobTitle;
//console.info(mottoElement);
// mottoElement.innerHTML += " & " + jobTitle;
age += age;
console.info(age);

var person = {
  employaed: true,
  age: 29,
  objarray: [15, 16, 17],
};

console.info(person);
console.info(person.objarray);

function showHomePage() {
  //console.info("I should see home page");
  document.getElementById("home").style.display = "block";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";
}

function showSkillsPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "block";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "none";
}

function showProjectsPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "block";
  document.getElementById("languages").style.display = "none";
}

function showLanguagesPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("languages").style.display = "block";
}

showHomePage();
