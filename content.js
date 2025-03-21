function loadContent(page) {
    fetch(`content/${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = `<div>${data}</div>`;
        })
        .catch(error => console.error("Fehler beim Laden des Inhalts:", error));
}