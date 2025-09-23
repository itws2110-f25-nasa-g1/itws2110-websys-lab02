let articles = document.querySelectorAll("article");

articles.forEach(article => {
  let header = article.querySelector("h2");
  //clicking article header toggles the article
  header.addEventListener("click", () => {
    article.classList.toggle("hidden");
  });
  
  let sections = article.querySelectorAll("section");
  sections.forEach(section => {
    section_header = section.querySelector("h3");
    if(!section_header) { //not all sections have headers
      return;
    }
    //clicking the section header toggles the section
    section_header.addEventListener("click", () => {
      section.classList.toggle("hidden");
    });
  });

});