function createNavbar() {
    const navbarContainer = document.getElementById("navbarContainer");

    const navbarHTML = `
        <nav>
            <ul>
                <li><a href="../../pages/Home/home.html">Home</a></li>
                <li><a href="../../pages/About/about.html">About</a></li>
                <li><a href="../../pages/Albums/albums.html">Albums</a></li>
                <!-- Agrega más elementos según sea necesario -->
            </ul>
        </nav>
    `;

    navbarContainer.innerHTML = navbarHTML;
}

createNavbar();
