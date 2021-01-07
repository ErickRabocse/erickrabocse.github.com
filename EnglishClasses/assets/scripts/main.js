
//THIS PRINTS THE ELEMENT CONTAINTER WHICH IF SELECTED HIGHLIGHTS THE SPACE IT OCCUPIES.
console.log("This is a new js file! :)");
let container = document.querySelector(".container");
console.log(container);

//THIS PRINTS THE ELEMENT TABLE WHICH IF SELECTED HIGHLIGHTS THE SPACE IT OCCUPIES.
let table = document.querySelector(".table");
console.log(table);

//THIS PRINTS A LIST OF ALL THE LINKS WHICH IF SELECTED HIGHLIGHTS THEIR LOCATION.
let link = document.querySelectorAll("a");
console.log(link);

//THIS FINDS ALL THE LINKS AND DISPLAYS THEM AS SEPARATE ELEMENTS.
link.forEach(function(a){
  console.log(a);
});

//THIS PRINTS EACH CELL ELEMENT THAT IS CLICKED ON!
let cells = document.querySelectorAll("td");
cells.forEach(function(cell){
  cell.addEventListener("click",function(){
    console.log(this);
  })
});

//THIS PRINTS THE MESSAGE BYE WHEN CLICKING THE CLOSE BTN
let button = document.querySelectorAll(".close");
button.forEach(function(btn){
  btn.addEventListener("click",function(){
    console.log("Bye!");
  });
});

/*THIS PREVENT CLOSE BTN FROM WORKING!, REMOVES THE CLASS "FADEIN" AFTER IT HAPPENS,
ADDS THE ANIMATION "FADEOUT" & REDIRECTS TO THE INDEX AFTER 8 MILISECONDS.*/
let links = document.querySelectorAll(".close");

links.forEach(function(btn){
  btn.addEventListener("click", function(ev){
    ev.preventDefault();

    let content = document.querySelector(".content");

    content.classList.remove("animate__animated");
    content.classList.remove("animate__fadeInDown");

    content.classList.add("animate__animated");
    content.classList.add("animate__fadeOutUp");

    setTimeout(function(){
      window.history.go(-1);
    },800);
  });
});


/*TO REMOVE CLASS
let icons = document.querySelectorAll("i");
icons.forEach(function(icon){
  icon.classList.remove("fas");
});
*/
