
/*
console.log("This is a new js file! :)");
let container = document.querySelector(".container");
console.log(container);

let table = document.querySelector(".table");
console.log(table);

let links = document.querySelectorAll("a");
console.log(links);

links.forEach(function(a){
  console.log(a);
});

let cells = document.querySelectorAll("td");
cells.forEach(function(cell){
  cell.addEventListener("click",function(){
    console.log(this);
  })
});
*/

let links = document.querySelectorAll(".close");

links.forEach(function(btn){
  btn.addEventListener("click",function(){
    console.log("Bye!");
  });
});
//PREVENT CLOSE BTN FROM WORKING!!!
links.forEach(function(btn){
  btn.addEventListener("click", function(ev){
    ev.preventDefault();

    let content = document.querySelector(".content");
    content.classList.remove("animate__animated");
    content.classList.remove("animate__fadeInDown");
    content.classList.add("animate__animated");
    content.classList.add("animate__fadeInUp");
  });
});


/*TO REMOVE CLASS
let icons = document.querySelectorAll("i");
icons.forEach(function(icon){
  icon.classList.remove("fas");
});
*/
