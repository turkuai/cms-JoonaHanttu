console.log("Admin JS loaded");

// Load saved content on page load
window.addEventListener("DOMContentLoaded", () => {
  loadLogo();
  loadFooterLinks();
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
