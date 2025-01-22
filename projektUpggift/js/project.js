function toggleMenu() {
  const links = document.getElementById("myLinks");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}

function filterArticles() {
  const filter = document.getElementById("filter").value;
  const articles = document.querySelectorAll(".tech-article");

  articles.forEach((article) => {
    if (filter === "all" || article.dataset.category === filter) {
      article.style.display = "block";
    } else {
      article.style.display = "none";
    }
  });
}
