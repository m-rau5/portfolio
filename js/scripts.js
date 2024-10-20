//arrow+project scroll controllers
document.getElementById("aboutScroll").addEventListener("click", function () {
  document
    .getElementById("about-section-start")
    .scrollIntoView({ behavior: "smooth" });
});

document.getElementById("projScroll").addEventListener("click", function () {
  document
    .getElementById("project-section-start")
    .scrollIntoView({ behavior: "smooth" });
});
