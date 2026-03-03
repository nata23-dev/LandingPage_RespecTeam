// Seleccionamos el botón por su ID
const button = document.getElementById("colorButton");

// Creamos un arreglo con algunos colores
const colors = [
    "#8e4343",
    "#64ff00",
    "#000000",
    "#0202bf",
    "#ffff00"];

// Variable para llevar el control del color actual
let index = 0;

// Agregamos un evento "click" al botón
button.addEventListener("click", function () {
    // Cambiamos el color de fondo del body
    document.body.style.backgroundColor = colors[index];

    // Avanzamos al siguiente color
    index++;

    // Si llegamos al final del arreglo, regresamos al inicio
    if (index >= colors.length) {
        index = 0;
    }
});

// ------------------- Nueva lógica para integrantes -------------------
// Array de integrantes: cada objeto tiene nombre, foto (url) y descripción
const members = [
    {
        name: "Alumno 1",
        photo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fholatelcel.com%2Fwp-content%2Fuploads%2F2022%2F08%2Fhombre-estudiante-universitario.jpg&f=1&nofb=1&ipt=299fb6f4811f81daef02520bf91ef068ae8de2774be6d39292e924592dc4f2ab",
        desc: "Soy Misa"
    },
    {
        name: "Alumno 2",
        photo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fstudent%2Fstudent_PNG93.png&f=1&nofb=1&ipt=0d0c54759949bb26c8d6cf13bfcf5eac7c4a93dc429821e3fb3ebe37ccc3b5dd",
        desc: "Hola"
    }
];

// Controles del DOM para la sección del integrante
const memberNameEl = document.getElementById('memberName');
const memberPhotoEl = document.getElementById('memberPhoto');
const memberDescEl = document.getElementById('memberDesc');
const nextMemberButton = document.getElementById('nextMemberButton');

// Índice del miembro mostrado actualmente
let currentMember = 0;

// Función para mostrar un miembro por índice
function showMember(i) {
    const m = members[i];
    memberNameEl.textContent = m.name;
    memberPhotoEl.src = m.photo;
    memberPhotoEl.alt = `Foto de ${m.name}`;
    memberDescEl.textContent = m.desc;
}

// Mostrar el primer integrante al cargar la página
showMember(currentMember);

// Evento para alternar entre integrantes
nextMemberButton.addEventListener('click', function () {
    // Alternamos entre 0 y 1 (o avanzamos cíclicamente si hay más)
    currentMember = (currentMember + 1) % members.length;
    showMember(currentMember);
});