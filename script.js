window.addEventListener("load", function () {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(
    function (response) {
      response.json().then(function (json) {

        const astronaut = document.getElementById("container");
        
        let index = 0;
        
        astronaut.innerHTML = `
        <h3>${json[index].firstName} ${json[index].lastName} </h3>
            <ul>
            <li>Hours in space: ${json[index].hoursInSpace}</li>
            <li>Active: ${json[index].active} </li>
            <li>Skills: ${json[index].skills} </li>
            </ul>
            <img src=${json[index].picture} height=150></img>
          `;
        index = (index + 1) % json.length;
      });
    }
  );
});
