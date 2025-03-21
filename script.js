document.addEventListener("DOMContentLoaded", function () {
    document.body.style.fontFamily = "Arial, sans-serif";
    document.body.style.textAlign = "center";
    document.body.style.backgroundColor = "#222";
    document.body.style.color = "#fff";


    let header = document.createElement("header");
    header.innerHTML = `
    <div class="w3-amber">
        <h2>Tekki Mariani</h2>
        <p>This is where the art comes from</p>
    </div>
    `;
    document.body.insertBefore(header, document.body.firstChild);


    // Optional: Navigation dynamisch einfügen
    let nav = document.createElement("nav");
    nav.innerHTML = `
        <a href="index.html">Home</a> | 
        <a href="about.html">Über mich</a> | 
        <a href="projects.html">Projekte</a>
    `;
    document.body.insertAfter(nav, header);
});