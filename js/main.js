
console.log("Hey");

// const heading = new Vue({
//   el: '#main-heading',
//   data: {
//     message: 'Student | Developer | Nerd'
//   }
// })

// new Vue({
//   el: "#app",
//   data: { show: false }
// });


window.onscroll = function() {
    var header = document.getElementById("nav");
    // if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50 ) {
    console.log(document.documentElement.scrollTop);
    if ((document.documentElement.scrollTop >= 50 && document.documentElement.scrollTop <= 600) ||
        (document.documentElement.scrollTop >= 700 && document.documentElement.scrollTop <= 1250) ) {
        
        header.classList.add("nav-colored");
        header.classList.remove("nav-transparent");
    } else {
        header.classList.add("nav-transparent");
        header.classList.remove("nav-colored");
    }
}

function openSkills(evt,skillType) {
    var i;
    var x = document.getElementsByClassName("skills");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    var tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" selectedtab", "");
    }

    evt.currentTarget.className += " selectedtab";
    document.getElementById(skillType).style.display = "block";
  }


let slides = document.querySelectorAll(".slide");
let indicator = document.querySelectorAll(".indicator");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let index = 0;

for (let i = 0; i < slides.length; i++) {
  if (slides[i].classList.contains("active")) {
    index = i
  }
}

prev.onclick = prevSlide;
next.onclick = nextSlide;

indicator.forEach(x => {
  x.onclick = display;
});

function display() {
  let num;
  for (let i = 0; i < indicator.length; i++) {
    indicator[i].classList.remove("active");
    slides[i].classList.remove("active");
  }
  this.classList.add("active");
  for (let i =0; i < indicator.length; i++) {
    if (indicator[i].classList.contains("active")) {
     num = i;
    }
  }
  slides[num].classList.add("active");
  index = num;
}

function prevSlide() {
  slides[index].classList.remove("active");
  indicator[index].classList.remove("active");
  index--;
  console.log(index);
  if (index < 0) {
    index = slides.length - 1;
  }
  slides[index].classList.add("active");
  indicator[index].classList.add("active");
}

function nextSlide() {
  slides[index].classList.remove("active");
  indicator[index].classList.remove("active");
  index++;
  console.log(index);
  if (index == slides.length) {
    index = 0;
  }
  console.log(index);
  slides[index].classList.add("active");
  indicator[index].classList.add("active");
}
  