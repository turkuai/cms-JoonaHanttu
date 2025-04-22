console.log("Admin JS loaded");

function changeLogo() {
  const newUrl = document.getElementById("logo-url").value.trim();
  const logo = document.getElementById("logo");
  if (newUrl && logo) {
    logo.src = newUrl;
  }
}

function addFooterLink() {
  const text = document.getElementById("link-text").value.trim();
  const url = document.getElementById("link-url").value.trim();
  const group = document.getElementById("link-group").value;

  if (text && url && group) {
    const newLink = document.createElement("li");
    const a = document.createElement("a");
    a.href = url;
    a.textContent = text;
    newLink.appendChild(a);

    const list = document.getElementById(group);
    if (list) {
      list.appendChild(newLink);
    }
  }

  // Clear the fields
  document.getElementById("link-text").value = '';
  document.getElementById("link-url").value = '';
}

function removeLastFooterLink() {
  const group = document.getElementById("link-group").value;
  const list = document.getElementById(group);
  if (list && list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}
