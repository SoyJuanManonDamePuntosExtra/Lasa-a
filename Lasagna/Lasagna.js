// Tiempo de cocción estándar
const STANDARD_COOKING_TIME = 40;

// Selección de elementos del DOM
const lasagnaForm = document.getElementById('lasagnaForm');
const remainingTimeDisplay = document.getElementById('remainingTime');
const preparationTimeDisplay = document.getElementById('preparationTime');
const totalTimeDisplay = document.getElementById('totalTime');

// Manejo del evento de envío del formulario
lasagnaForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    const layers = parseInt(document.getElementById('layers').value, 10);
    const timeInOven = parseInt(document.getElementById('timeInOven').value, 10);

    // Validar entradas
    if (isNaN(layers) || layers < 0 || isNaN(timeInOven) || timeInOven < 0) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    // Cálculos
    const preparationTime = layers * 2; // 2 minutos por capa
    const remainingTime = Math.max(0, STANDARD_COOKING_TIME - timeInOven);
    const totalTime = preparationTime + timeInOven;

    // Mostrar resultados
    remainingTimeDisplay.textContent = `Tiempo restante en el horno: ${remainingTime} minutos.`;
    preparationTimeDisplay.textContent = `Tiempo total de preparación: ${preparationTime} minutos.`;
    totalTimeDisplay.textContent = `Tiempo total de trabajo: ${totalTime} minutos.`;
});
