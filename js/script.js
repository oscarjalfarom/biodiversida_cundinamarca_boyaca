// Inicialización del índice de la diapositiva del carrusel
let slideIndex = 0; 
showSlides(); // Llama a la función para mostrar la primera diapositiva

// Función para mostrar las diapositivas del carrusel
function showSlides() {
  let slides = document.getElementsByClassName("carousel-slide"); // Obtiene todas las diapositivas
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Oculta todas las diapositivas
  }
  slideIndex++; // Aumenta el índice de la diapositiva
  if (slideIndex > slides.length) { slideIndex = 1; } // Si supera la cantidad de diapositivas, reinicia el índice
  slides[slideIndex - 1].style.display = "block"; // Muestra la diapositiva actual
  setTimeout(showSlides, 4000); // Cambia de imagen cada 4 segundos
}

// Función para mover entre las diapositivas del carrusel
function moveSlide(n) {
  slideIndex += n; // Cambia el índice según el parámetro n
  let slides = document.getElementsByClassName("carousel-slide");
  if (slideIndex > slides.length) { slideIndex = 1; } // Reinicia si supera la cantidad de diapositivas
  if (slideIndex < 1) { slideIndex = slides.length; } // Regresa al último si es menor que 1
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Oculta todas las diapositivas
  }
  slides[slideIndex - 1].style.display = "block"; // Muestra la diapositiva actual
}

// Ajuste para el desplazamiento suave y centrado en las secciones
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // Previene el comportamiento por defecto del enlace

    const targetSection = document.querySelector(this.getAttribute('href')); // Obtiene la sección objetivo

    window.scrollTo({
      top: targetSection.offsetTop - 50, // Ajusta la cantidad de desplazamiento para centrado
      behavior: 'smooth' // Desplazamiento suave
    });
  });
});

// Manejo del envío del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Previene el comportamiento por defecto del formulario

  // Muestra un mensaje de éxito
  document.getElementById('form-status').innerText = "¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.";

  // Reinicia el formulario
  document.getElementById('contact-form').reset();
});

// Inicialización del mapa con Leaflet.js centrado en Bogotá
var map = L.map('map').setView([4.60971, -74.08175], 8); // Coordenadas centradas en Bogotá, Cundinamarca

// Cargar los tiles del mapa desde OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © OpenStreetMap contributors' // Atribución de datos del mapa
}).addTo(map); // Agregar el mapa al contenedor

// Función para agregar marcadores de los parques y puntos importantes de biodiversidad
function addMarker(lat, lng, title, description) {
  L.marker([lat, lng]).addTo(map) // Crear un marcador en las coordenadas especificadas
    .bindPopup(`<b>${title}</b><br>${description}`); // Mostrar información en un popup al hacer clic
}

// Añadir marcadores con información sobre parques naturales y puntos importantes de biodiversidad
addMarker(4.60971, -74.08175, 'Bogotá, Cundinamarca', 'Ciudad rodeada de ecosistemas diversos, con los cerros orientales y reservas naturales en sus alrededores.');
addMarker(5.026, -73.9904, 'Parque Nacional Natural Chingaza', 'Uno de los parques más importantes de Colombia, hogar del oso andino y otras especies en peligro.');
addMarker(4.8833, -73.9667, 'Páramo de Sumapaz', 'El páramo más grande del mundo, fundamental para la regulación hídrica y la biodiversidad local.');
addMarker(5.4162, -73.3692, 'Santuario de Fauna y Flora Iguaque', 'Refugio de frailejones, venados y aves endémicas en Boyacá.');
addMarker(4.7297, -74.0199, 'Reserva Natural El Encenillo', 'Reserva que protege ecosistemas de bosque altoandino, hogar de especies en peligro.');
addMarker(4.655, -74.093, 'Jardín Botánico de Bogotá', 'Un pulmón verde en el corazón de Bogotá que preserva una gran variedad de plantas nativas.');
addMarker(4.5983, -74.0646, 'Parque Ecológico Matarredonda', 'Ubicado en los cerros orientales, este parque ofrece biodiversidad andina y páramos.');
addMarker(5.1442, -73.6353, 'Reserva Natural Páramo de Guerrero', 'Importante reserva que protege los ecosistemas de páramo en el altiplano cundiboyacense.');
