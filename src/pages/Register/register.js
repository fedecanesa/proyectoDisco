function register(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Aquí puedes agregar la lógica para enviar los datos a tu servidor y realizar el registro
    // En este ejemplo, solo mostramos los datos en la consola
    console.log("Nombre:", firstName);
    console.log("Apellido:", lastName);
    console.log("Email:", email);
    console.log("Contraseña:", password);
}
