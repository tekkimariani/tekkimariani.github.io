document.addEventListener("DOMContentLoaded", function () {
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.textAlign = "center";
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "#fff";

    // Optional: Navigation dynamisch einfügen
    let nav = document.createElement("nav");
    nav.innerHTML = `
        <a href="index.html">Home</a> | 
        <a href="about.html">Über mich</a> | 
        <a href="projects.html">Projekte</a>
    `;
    document.body.insertBefore(nav, document.body.firstChild);
});