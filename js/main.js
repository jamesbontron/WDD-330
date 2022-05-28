const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },
    {
      label: "Week 2 notes",
      url: "week2/project_ninja.html"
    },
    {
      label: "Week 3 Notes",
      url: "week3/week3.html"
    },
    {
      label: "Week 4 Notes",
      url: "week4/week4.html"
    },
    {
      label: "Week 5 Notes",
      url: "week5/week5.html"
    },
    {
      label: "To Do Website",
      url: "todoProject/todo.html"
    }
  ]
function loadIndex() {
    const ol = document.querySelector("#linksList");
    
    links.forEach( link => {
        const li = document.createElement("li");
        const href = document.createElement("a");
        href.setAttribute("href", link.url);
        href.innerText = link.label;

        li.appendChild(href);
        ol.appendChild(li);
    })

}