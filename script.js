// Colores para el fondo
const bgThemes = ["#f8f9fa", "#eef2ff", "#f0fdf4", "#fff7ed", "#faf5ff", "#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ccebff"];
let themeIndex = 0;

// Colores para la tarjeta del integrante
const memberDivColors = ["#ffffff", "#ffe0e0", "#e0ffe0", "#e0e0ff", "#ffffe0", "#e7f5ff", "#fff0f0", "#f0fff0"];
let memberDivColorIndex = 0;

// Datos de los 6 integrantes (combinados)
const teamMembers = [
    {
        photo: "imagen_equipo/alumno1.webp",
        name: "Janet Arredondo Delgado",
        role: "Estudiante de Ingeniería en Sistemas Computacionales",
        desc: "Soy estudiante 6to. semestre de la carrera de ingenieria en sistemas computacionales, me gusta dibujar y escuchar música.",
        status: "Frontend Developer",
        color: "#3b82f6", // Azul
        github: "https://github.com/janet-arredondo"
    },
    {
        photo: "imagen_equipo/alumno2.jpeg",
        name: "Alex Ivan Mexicano Zuñiga",
        role: "Estudiante de Ingeniería en Sistemas Computacionales",
        desc: "Soy estudiante de la carrera de ingenieria en sistemas computacionales, me gusta el futbol, y ver series.",
        status: "Backend Developer",
        color: "#f97316", // Naranja
        github: "https://github.com/alex-mexicano"
    },
    {
        photo: "imagen_equipo/alumno6.jpeg",
        name: "Oswaldo Muñiz",
        role: "Estudiante de Ingeniería en Sistemas Computacionales",
        desc: "Estudiante apasionado por el desarrollo backend y las bases de datos. Me gusta resolver problemas complejos y aprender nsobre software libre.",
        status: "Backend Developer",
        color: "#f97316", // Naranja
        github: "https://github.com/oswa900"
    },
    {
        photo: "imagen_equipo/alumno5.jpg",
        name: "Natanael Barrera",
        role: "Estudiante de Ingeniería en Sistemas Computacionales",
        desc: "Especializado en frontend y experiencias de usuario interactivas. Disfruto crear interfaces atractivas y funcionales.",
        status: "Frontend Developer",
        color: "#3b82f6", // Azul
        github: "https://github.com/nata23-dev"
    },
    {
        photo: "imagen_equipo/ebb5f914-c634-460b-83dd-74228d3b5e9e.jpg", // Ajusta la ruta según tu estructura
        name: "Andrés Lemus Díaz",
        role: "Estudiante de Ingeniería en Sistemas Computacionales",
        desc: "Me gusta la ciberseguridad :).",
        status: "Estudiante",
        color: "#10b981", // Verde
        github: "https://github.com/andreslm0"
    },
    {
        photo: "imagen_equipo/alumno3.jpg", // Ajusta la ruta según tu estructura
        name: "Deciderio Cervantes Josue Misael",
        role: "Estudiante de Ingeniería en Sistemas Computacionales",
        desc: "Me gusta desarrollar en FrontEnd y también disfruto aprender idiomas.",
        status: "Frontend Developer",
        color: "#FB3640", // Rojo
        github: "https://github.com/Missael040705"
    }
];

let memberIndex = 0;

// Función para actualizar el reloj
function updateClock() {
    const timeDisplay = document.getElementById("time-display");
    const now = new Date();
    const horas = String(now.getHours()).padStart(2, "0");
    const minutos = String(now.getMinutes()).padStart(2, "0");
    const segundos = String(now.getSeconds()).padStart(2, "0");
    timeDisplay.innerHTML = `🕒 Hora local: ${horas}:${minutos}:${segundos}`;
}

// Función para cambiar de integrante
function handleSwitch(event) {
    const memberSection = document.getElementById("member-section");
    const photo = document.getElementById("member-photo");
    const name = document.getElementById("member-name");
    const role = document.getElementById("member-role-title");
    const desc = document.getElementById("member-desc");
    const statusBadge = document.getElementById("member-status");
    const githubLink = document.getElementById("member-github");
    const switchBtn = document.getElementById("switchButton");

    // Animación de salida
    memberSection.style.opacity = "0";
    memberSection.style.transform = "translateY(10px)";

    setTimeout(() => {
        memberIndex = (memberIndex + 1) % teamMembers.length;
        const member = teamMembers[memberIndex];

        // Actualizar contenido
        photo.src = member.photo;
        name.textContent = member.name;
        role.textContent = member.role;
        desc.innerHTML = member.desc;
        statusBadge.textContent = member.status;
        githubLink.href = member.github;

        // Actualizar estilos del badge
        statusBadge.style.backgroundColor = `${member.color}20`; // 20 es opacidad en hex (~12%)
        statusBadge.style.color = member.color;

        // Actualizar texto del botón según el índice
        const nextIndex = (memberIndex + 1) % teamMembers.length;
        const nextMember = teamMembers[nextIndex];
        switchBtn.innerHTML = `Siguiente: ${nextMember.name.split(' ')[0]} ➜`;

        // Manejar error de imagen
        photo.onerror = () => {
            console.log("No se pudo cargar la imagen:", member.photo);
            photo.src = "https://via.placeholder.com/200x200?text=" + member.name.split(' ')[0];
        };

        // Animación de entrada
        memberSection.style.opacity = "1";
        memberSection.style.transform = "translateY(0)";
    }, 300);
}

// Función para cambiar a un integrante específico (opcional - para navegación directa)
function goToMember(index) {
    if (index < 0 || index >= teamMembers.length) return;
    
    const memberSection = document.getElementById("member-section");
    const photo = document.getElementById("member-photo");
    const name = document.getElementById("member-name");
    const role = document.getElementById("member-role-title");
    const desc = document.getElementById("member-desc");
    const statusBadge = document.getElementById("member-status");
    const githubLink = document.getElementById("member-github");
    const switchBtn = document.getElementById("switchButton");

    memberSection.style.opacity = "0";
    memberSection.style.transform = "translateY(10px)";

    setTimeout(() => {
        memberIndex = index;
        const member = teamMembers[memberIndex];

        photo.src = member.photo;
        name.textContent = member.name;
        role.textContent = member.role;
        desc.innerHTML = member.desc;
        statusBadge.textContent = member.status;
        githubLink.href = member.github;

        statusBadge.style.backgroundColor = `${member.color}20`;
        statusBadge.style.color = member.color;

        const nextIndex = (memberIndex + 1) % teamMembers.length;
        const nextMember = teamMembers[nextIndex];
        switchBtn.innerHTML = `Siguiente: ${nextMember.name.split(' ')[0]} ➜`;

        photo.onerror = () => {
            photo.src = "https://via.placeholder.com/200x200?text=" + member.name.split(' ')[0];
        };

        memberSection.style.opacity = "1";
        memberSection.style.transform = "translateY(0)";
    }, 300);
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    // Iniciar reloj
    setInterval(updateClock, 1000);
    updateClock();

    // Botón cambiar color de fondo
    document.getElementById("colorButton").addEventListener("click", () => {
        themeIndex = (themeIndex + 1) % bgThemes.length;
        document.body.style.backgroundColor = bgThemes[themeIndex];
        
        // Cambiar color de la tarjeta
        const memberSection = document.getElementById("member-section");
        memberDivColorIndex = (memberDivColorIndex + 1) % memberDivColors.length;
        memberSection.style.backgroundColor = memberDivColors[memberDivColorIndex];
        memberSection.style.transition = "background-color 0.4s ease";
    });

    // Botón cambiar integrante
    document.getElementById("switchButton").addEventListener("click", handleSwitch);

    // Configurar badge inicial
    const firstBadge = document.getElementById("member-status");
    firstBadge.style.backgroundColor = "#3b82f620";
    firstBadge.style.color = "#3b82f6";

    // Mostrar total de integrantes (opcional - puedes agregar un elemento en el HTML)
    console.log(`Total de integrantes: ${teamMembers.length}`);
});

// Función para obtener el integrante actual (útil para debugging)
function getCurrentMember() {
    return teamMembers[memberIndex];
}

// Función para obtener todos los integrantes
function getAllMembers() {
    return teamMembers;
}
