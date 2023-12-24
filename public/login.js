function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulación de inicio de sesión para propósitos de ejemplo
    if (username === "usuario" && password === "contrasena") {
        alert("Inicio de sesión exitoso");
        // Puedes redirigir a otra página después del inicio de sesión exitoso
        // window.location.href = '/dashboard';
        window.location.href = "../src/pages/Home/home.html";
    } else {
        alert(
            "Error de inicio de sesión. Verifica tu nombre de usuario y contraseña."
        );
    }
}
