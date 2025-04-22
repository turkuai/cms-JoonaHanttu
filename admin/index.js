function changeLogo() {
    const newUrl = document.getElementById("logo-url").value.trim();
    console.log("Updating logo to:", newUrl);
    if (newUrl) {
      const logo = document.getElementById("logo");
      if (logo) {
        logo.src = newUrl;
      } else {
        console.error("Logo element not found.");
      }
    }
  }
  
  function addFooterLink() {
    const text = document.getElementById("link-text").value.trim();
    const url = document.getElementById("link-url").value.trim();
    const group = document.getElementById("link-group").value;
  
    console.log("Adding link:", text, url, "to", group);
  
    if (text && url && group) {
      const newLink = document.createElement("li");
      const a = document.createElement("a");
      a.href = url;
      a.textContent = text;
      newLink.appendChild(a);
  
      const list = document.getElementById(group);
      if (list) {
        list.appendChild(newLink);
      } else {
        console.error("Footer group not found:", group);
      }
  
      document.getElementById("link-text").value = '';
      document.getElementById("link-url").value = '';
    }
  }
  console.log("admin-controls.js loaded!");
  