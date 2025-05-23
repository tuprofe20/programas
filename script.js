document.addEventListener('DOMContentLoaded', () => {
    const cangrejo = document.getElementById('cangrejo');
    const escenario = document.getElementById('escenario');

    let posicionX = 50;  // Posición X inicial (debe coincidir con CSS 'left')
    let velocidad = 3;   // Píxeles por frame
    let direccion = 1;   // 1 para derecha, -1 para izquierda

    // Obtener dimensiones después de que la página se haya cargado completamente
    let anchoEscenario;
    let anchoCangrejo;

    function actualizarDimensiones() {
        anchoEscenario = escenario.offsetWidth;
        anchoCangrejo = cangrejo.offsetWidth;
    }

    function moverCangrejo() {
        // Actualizar posición
        posicionX += velocidad * direccion;

        // Aplicar la nueva posición
        cangrejo.style.left = posicionX + 'px';

        // Voltear el cangrejo según la dirección
        if (direccion === 1) {
            cangrejo.style.transform = 'scaleX(1)'; // Mirando a la derecha
        } else {
            cangrejo.style.transform = 'scaleX(-1)'; // Mirando a la izquierda (volteado)
        }

        // Comprobar límites del escenario
        if (posicionX + anchoCangrejo > anchoEscenario) {
            direccion = -1; // Cambiar a la izquierda
            posicionX = anchoEscenario - anchoCangrejo; // Ajustar para no salirse
        } else if (posicionX < 0) {
            direccion = 1;  // Cambiar a la derecha
            posicionX = 0;    // Ajustar para no salirse
        }

        // Llamar a la siguiente animación
        requestAnimationFrame(moverCangrejo);
    }

    // Inicializar dimensiones y comenzar la animación
    actualizarDimensiones();
    moverCangrejo();

    // Re-calcular dimensiones si la ventana cambia de tamaño (opcional pero bueno)
    window.addEventListener('resize', actualizarDimensiones);
});