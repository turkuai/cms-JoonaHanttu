console.log("Admin JS loaded");

// Load saved content on page load
window.addEventListener("DOMContentLoaded", () => {
  loadLogo();
  loadFooterLinks();
  loadCustomArticles(); // <-- Add this line
});


function changeLogo() {
  const newUrl = document.getElementById("logo-url").value.trim();
  const logo = document.getElementById("logo");
  if (newUrl && logo) {
    logo.src = newUrl;
    localStorage.setItem("siteLogo", newUrl); // Save to localStorage
  }
}

function addFooterLink() {
  const text = document.getElementById("link-text").value.trim();
  const url = document.getElementById("link-url").value.trim();
  const group = document.getElementById("link-group").value;

  if (text && url && group) {
    const linkData = { text, url };
    const list = document.getElementById(group);
    const newLink = createLinkElement(linkData);
    list.appendChild(newLink);

    // Save to localStorage
    saveFooterLink(group, linkData);
  }

  // Clear fields
  document.getElementById("link-text").value = '';
  document.getElementById("link-url").value = '';
}

function removeLastFooterLink() {
    const group = document.getElementById("link-group").value;
    const list = document.getElementById(group);
  
    if (list && list.lastElementChild) {
      const lastLinkText = list.lastElementChild.textContent || "this link";
      const confirmed = confirm(`Are you sure you want to remove "${lastLinkText}"?`);
  
      if (confirmed) {
        list.removeChild(list.lastElementChild);
        removeLastLinkFromStorage(group);
      }
    } else {
      alert("There are no links to remove in this group.");
    }
  }
  

function createLinkElement(linkData) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = linkData.url;
  a.textContent = linkData.text;
  li.appendChild(a);
  return li;
}

function saveFooterLink(group, linkData) {
  const key = `footerLinks-${group}`;
  const existing = JSON.parse(localStorage.getItem(key)) || [];
  existing.push(linkData);
  localStorage.setItem(key, JSON.stringify(existing));
}

function removeLastLinkFromStorage(group) {
  const key = `footerLinks-${group}`;
  const existing = JSON.parse(localStorage.getItem(key)) || [];
  existing.pop();
  localStorage.setItem(key, JSON.stringify(existing));
}

function loadLogo() {
  const savedLogo = localStorage.getItem("siteLogo");
  if (savedLogo) {
    const logo = document.getElementById("logo");
    logo.src = savedLogo;
    document.getElementById("logo-url").value = savedLogo;
  }
}

function loadFooterLinks() {
  ["footer-links-1", "footer-links-2"].forEach(group => {
    const key = `footerLinks-${group}`;
    const list = document.getElementById(group);
    const savedLinks = JSON.parse(localStorage.getItem(key)) || [];
    savedLinks.forEach(linkData => {
      const linkElement = createLinkElement(linkData);
      list.appendChild(linkElement);
    });
  });
}

function createArticle() {
  const title = document.getElementById("new-article-title").value.trim();
  const content = document.getElementById("new-article-content").value.trim();
  const imageUrl = document.getElementById("new-article-image").value.trim() || 'placeholder.jpg';

  if (!title || !content) {
      alert("Title and content are required.");
      return;
  }

  const articleData = { title, content, imageUrl };

  const articles = JSON.parse(localStorage.getItem("customArticles")) || [];
  articles.push(articleData);
  localStorage.setItem("customArticles", JSON.stringify(articles));

  appendArticleToDOM(articleData);

  // Clear input fields
  document.getElementById("new-article-title").value = '';
  document.getElementById("new-article-content").value = '';
  document.getElementById("new-article-image").value = '';
}

function deleteLastArticle() {
  const articles = document.querySelectorAll("main .article");
  const defaultCount = 2; // number of initial hardcoded articles
  if (articles.length > defaultCount) {
      articles[articles.length - 1].remove();

      const savedArticles = JSON.parse(localStorage.getItem("customArticles")) || [];
      savedArticles.pop();
      localStorage.setItem("customArticles", JSON.stringify(savedArticles));
  } else {
      alert("You can only delete custom-added articles.");
  }
}

function appendArticleToDOM(article, index = null) {
  const section = document.createElement("section");
  section.className = "article";

  section.innerHTML = `
      <div class="text-content">
          <h2>${article.title}</h2>
          <p>${article.content}</p>
      </div>
      <div class="image-placeholder">
          <img src="${article.imageUrl}" alt="">
      </div>
      <button class="edit-button">Edit</button>
  `;

  // Add edit functionality
  section.querySelector(".edit-button").addEventListener("click", () => {
      const newTitle = prompt("New title:", article.title);
      const newContent = prompt("New content:", article.content);
      const newImageUrl = prompt("New image URL:", article.imageUrl);

      if (newTitle && newContent) {
          article.title = newTitle.trim();
          article.content = newContent.trim();
          article.imageUrl = newImageUrl.trim() || article.imageUrl;

          // Update in localStorage
          const saved = JSON.parse(localStorage.getItem("customArticles")) || [];
          const articleIndex = index ?? Array.from(document.querySelectorAll("main .article")).indexOf(section) - 2; // skip hardcoded articles
          if (saved[articleIndex]) {
              saved[articleIndex] = article;
              localStorage.setItem("customArticles", JSON.stringify(saved));
          }

          // Update DOM
          section.querySelector("h2").textContent = article.title;
          section.querySelector("p").textContent = article.content;
          section.querySelector("img").src = article.imageUrl;
      }
  });

  document.querySelector("main").appendChild(section);
}


function loadCustomArticles() {
  const savedArticles = JSON.parse(localStorage.getItem("customArticles")) || [];
  savedArticles.forEach((article, index) => appendArticleToDOM(article, index));
}


