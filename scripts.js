document.addEventListener("DOMContentLoaded", function () {
    fetch("resultado.json")
        .then((response) => response.json())
        .then((data) => {
            const tableBody = document.querySelector("#results-table tbody");

            data.forEach((item) => {
                const row = document.createElement("tr");
                const statusCell = document.createElement("td");
                statusCell.textContent = item.status;
                const urlCell = document.createElement("td");
                const link = document.createElement("a");
                link.href = item.url;
                link.textContent = item.url;
                urlCell.appendChild(link);

                row.appendChild(statusCell);
                row.appendChild(urlCell);
                tableBody.appendChild(row);
            });
        })
        .catch((error) => console.error("Error fetching data:", error));
});