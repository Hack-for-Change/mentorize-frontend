const senhaInput = document.getElementById('senha');
const tipoInput = document.getElementById('tipo');
const nomeInput = document.getElementById('nome');
const cpfInput = document.getElementById('cpf');
const emailInput = document.getElementById('email');
const categoriasInput = document.getElementById('categorias');
const descricaoInput = document.getElementById('catStyle');
tipoInput.addEventListener('change', function () {
    if (tipoInput.value === 'mentor') { 
        categoriasInput.style.display = 'block';
        descricaoInput.style.display = 'block'; 
    } else {
        categoriasInput.style.display = 'none'; 
        descricaoInput.style.display = 'none'; 
}});

const togglePasswordButton = document.querySelector('.toggle-password'); 

togglePasswordButton.addEventListener('click', function () {
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
    } else {
        senhaInput.type = 'password';
    }
});

function validateCPFOrRG(input) {
    const regex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/;
    
    const value = input.value;

    if (!regex.test(value)) {
        window.alert("Formato de CPF ou RG inválido.");
        input.value = "";
    } else {
        window.alert("Formato de CPF ou RG válido.");
    }
}

function validatePassword(input) {
    const value = input.value;

    if (value.length < 6) {
        window.alert("A senha deve ter pelo menos 6 caracteres.");
        input.value = "";
    }
}

function validateForm(form) {
    const cpfInput = form.querySelector("#cpf");
    const senhaInput = form.querySelector("#senha");

    if (!validateCPFOrRG(cpfInput) || !validatePassword(senhaInput)) {
        return false; 
    }

    return true;
}