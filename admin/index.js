function changeLogo() {
    const newUrl = document.getElementById("logo-url").value.trim();
    if (newUrl) {
      const logo = document.getElementById("logo");
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
      document.getElementById(group).appendChild(newLink);
  
      document.getElementById("link-text").value = '';
      document.getElementById("link-url").value = '';
    }
  }
  
  function removeLastFooterLink() {
    const group = document.getElementById("link-group").value;
    const list = document.getElementById(group);
    if (list.lastElementChild) {
      list.removeChild(list.lastElementChild);
    }
  }
  