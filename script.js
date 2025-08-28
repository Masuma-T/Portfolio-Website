// Typing Effect
// Typing Effect with Colors
const typing = document.querySelector(".typing");
if (typing) {
  const roles = [
    { text: "Web Developer", class: "role-web" },
    { text: "Problem Solver", class: "role-problem" },
    { text: "Creative Thinker", class: "role-creative" }
  ];
  let index = 0, charIndex = 0;

  function typeEffect() {
    if (charIndex === 0) {
      typing.textContent = "";
      typing.className = `typing ${roles[index].class}`;
    }

    if (charIndex < roles[index].text.length) {
      typing.textContent += roles[index].text[charIndex];
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(eraseEffect, 1500);
    }
  }

  function eraseEffect() {
    if (charIndex > 0) {
      typing.textContent = roles[index].text.substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 50);
    } else {
      index = (index + 1) % roles.length;
      setTimeout(typeEffect, 500);
    }
  }

  document.addEventListener("DOMContentLoaded", typeEffect);
}


// for the hamburger menu 

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".hamburger");
  const navCircle = document.querySelector(".nav-circle");
  const links = navCircle.querySelectorAll("a");
 
  // toggle menu on hamburger click
  burger.addEventListener("click", () => {
    navCircle.classList.toggle("open");
    page.classList.toggle("menu-open");
  });
  
  // close menu when clicking a link
  links.forEach(link => {
    link.addEventListener("click", () => {
      navCircle.classList.remove("open");
    });
  });  
});



