/** @format */

const sections = document.querySelectorAll("section");
const navigationUl = document.getElementById("navbar__list");
navigationUl.setAttribute("class", "container");

// build the nav
addNavElements = () => {
  const sectionsNavFragment = document.createDocumentFragment();
  sections.forEach((section) => {
    const navElement = document.createElement("li");
    const linkToSection = document.createElement("a");
    linkToSection.innerText = section.getAttribute("data-nav");
    const sectionId = section.getAttribute("id");
    // Scroll to anchor ID using scrollTO event
    linkToSection.setAttribute("href", `#${sectionId}`);
    linkToSection.setAttribute("class", `#${sectionId}`);
    navElement.appendChild(linkToSection);
    sectionsNavFragment.appendChild(navElement);
  });
  navigationUl.appendChild(sectionsNavFragment);
};

// Build menu
addNavElements();

/**
 * End Main Functions
 * Begin Events
 *
 */

// Set sections as active
const allLinks = document.querySelectorAll("a");
manageActiveSection = () => {
  let sectionsNumber = sections.length;

  while (
    --sectionsNumber &&
    window.scrollY + 50 < sections[sectionsNumber].offsetTop
  ) {}

  allLinks.forEach((link) => {
    link.classList.remove("active");
  });
  // Add class 'active' to section when near top of viewport

  allLinks[sectionsNumber].classList.add("active");
};

//Scrolling to a section

const manageScrolling = () => {
  this.manageActiveSection();

  allLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
};

// Scroll to section on link click
manageActiveSection();
manageScrolling();

window.addEventListener("scroll", manageActiveSection);
