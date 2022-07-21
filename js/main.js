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
    },
    {
      label: "Week 7 Notes",
      url: "week7/week7.html"
    },
    {
      label: "Week 8 Notes and Code",
      url: "week8/index.html"
    },
    {
      label: "Week 9 Notes",
      url: "week9/week9.html"
    },
    {
      label: "Week 10 Notes",
      url: "week10/index.html"
    },
    {
      label: "Final Project",
      url: "Final Project/index.html"
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