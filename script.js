const alertPlaceholder = document.getElementById('liveAlertPlaceholder');

const appendAlert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');

    alertPlaceholder.innerHTML = '';
    alertPlaceholder.append(wrapper);
};

// Función para verificar el número ingresado
const verificarNumero = () => {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    const numeroInput = document.getElementById('numeroInput');

    let numeroUsuario = parseInt(numeroInput.value);

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        appendAlert("Por favor, ingresa un número válido entre 1 y 100.", 'danger');
        return;
    }

    if (numeroUsuario === numeroSecreto) {
        appendAlert('¡Felicidades, adivinaste el número secreto!', 'success');
    } else {
        appendAlert('Ups, el número secreto es incorrecto, vuelve a intentarlo.', 'danger');
    }
};
