function managerCard(data) {
  return `<div class="card" style="width: 18rem">
      <div class="card-header">${data.name}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${data.id}</li>
        <li class="list-group-item">${data.email}</li>
        <li class="list-group-item">${data.officeNumber}</li>
      </ul>
    </div>`;
}
function engineerCard(data) {
  return `<div class="card" style="width: 18rem">
      <div class="card-header">${data.name}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${data.id}</li>
        <li class="list-group-item">${data.email}</li>
        <li class="list-group-item">${data.github}</li>
      </ul>
    </div>`;
}
function internCard(data) {
  return `<div class="card" style="width: 18rem">
    <div class="card-header">${data.name}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${data.id}</li>
      <li class="list-group-item">${data.email}</li>
      <li class="list-group-item">${data.school}</li>
    </ul>
  </div>`;
}
function generateHTML(teamInfo) {
  let cardArr = [];
  for (let i = 0; i < teamInfo.length; i++) {
    if (teamInfo[i].getRole() === "Manager") {
      cardArr.push(managerCard(teamInfo[i]));
    } else if (teamInfo[i].getRole() === "Engineer") {
      cardArr.push(engineerCard(teamInfo[i]));
    } else {
      cardArr.push(internCard(teamInfo[i]));
    }
  }
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossorigin="anonymous"
    />
    <script
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
      crossorigin="anonymous"
    ></script>
    <title>Team Generator</title>
  </head>
  <body>
  <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Team</h1>
      </div>
    </div>
    ${cardArr.join("")}
  </body>
</html>`;
}
module.exports = generateHTML;
