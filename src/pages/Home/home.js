document.addEventListener("DOMContentLoaded", () => {
    // Puedes cargar dinámicamente los datos de los próximos shows aquí
    const showsContainer = document.getElementById("showsContainer");

    // Ejemplo de cómo agregar dinámicamente datos de shows
    const showsData = [
        {
            date: "2023-01-15",
            location: "Lugar 1",
            details: "Detalles del show 1",
        },
        {
            date: "2023-02-10",
            location: "Lugar 2",
            details: "Detalles del show 2",
        },
        {
            date: "2023-03-05",
            location: "Lugar 3",
            details: "Detalles del show 3",
        },
    ];

    showsData.forEach((show) => {
        const showElement = document.createElement("div");
        showElement.classList.add("show-item");
        showElement.innerHTML = `
            <p><strong>Fecha:</strong> ${show.date}</p>
            <p><strong>Lugar:</strong> ${show.location}</p>
            <p><strong>Detalles:</strong> ${show.details}</p>
        `;
        showsContainer.appendChild(showElement);
    });
});
