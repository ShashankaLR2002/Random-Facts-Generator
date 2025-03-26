function fetchNumberFact() {
    let number = document.getElementById("numberInput").value || "random";
    let apiUrl = `http://numbersapi.com/${number}`;

    fetch(apiUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById("factResult").innerText = data;
        })
        .catch(error => console.error("Error fetching data:", error));
}

document.getElementById("darkModeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
