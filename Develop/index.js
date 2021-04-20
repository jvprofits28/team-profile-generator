const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./templatehtml");
let teamInfo = [];

const menuQuestions = [
  {
    type: "list",
    message: " what would you like to create?",
    choices: ["Engineer", "Intern", "build the team"],
    name: "create",
  },
];
const managerQuestions = [
  {
    type: "input",
    message: "whats the managers name?",
    name: "name",
  },
  {
    type: "input",
    message: "Whats the managers ID?",
    name: "ID",
  },
  {
    type: "input",
    message: "whats the manager email?",
    name: "email",
  },
  {
    type: "input",
    message: "whats the office number?",
    name: "officeNumber",
  },
];
const engineerQuestions = [
  {
    type: "input",
    message: "whats the engineers name?",
    name: "name",
  },
  {
    type: "input",
    message: "whats the engineers ID?",
    name: "ID",
  },
  {
    type: "input",
    message: "whats the engineers email?",
    name: "email",
  },
  {
    type: "input",
    message: "whats the engineers Github username?",
    name: "github",
  },
];
const internQuestions = [
  {
    type: "input",
    message: "whats the interns name",
    name: "name",
  },
  {
    type: "input",
    message: "whats the interns ID?",
    name: "ID",
  },
  {
    type: "input",
    message: "whats the interns email?",
    name: "email",
  },
  {
    type: "input",
    message: "whats the interns school?",
    name: "school",
  },
];

function init() {
  inquirer.prompt(managerQuestions).then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.ID,
      answers.email,
      answers.officeNumber
    );
    teamInfo.push(manager);
    menu();
  });
}
function menu() {
  inquirer.prompt(menuQuestions).then((answers) => {
    if (answers.create === "Engineer") {
      //add engineer function call back
      engineer();
    } else if (answers.create === "Intern") {
      //add intern function call back
      intern();
    } else {
      //add build team function call back
      buildTeamHtml();
    }
  });
}
function engineer() {
  inquirer.prompt(engineerQuestions).then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.ID,
      answers.email,
      answers.github
    );
    teamInfo.push(engineer);
    menu();
  });
}
function intern() {
  inquirer.prompt(internQuestions).then((answers) => {
    const intern = new Intern(
      answers.name,
      answers.ID,
      answers.email,
      answers.school
    );
    teamInfo.push(intern);
    menu();
  });
}
function buildTeamHtml() {
  const htmlPageContent = generateHTML(teamInfo);

  fs.writeFile("index.html", htmlPageContent, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}
init();
