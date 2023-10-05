
var lembrarCheckbox = document.getElementById('lembrar');
lembrarCheckbox.addEventListener('change', function () {
    if (this.checked) {
        localStorage.setItem('lembrar', 'true');
    } else {
        localStorage.removeItem('lembrar');
    }
});

var lembrarValor = localStorage.getItem('lembrar');
if (lembrarValor === 'true') {
    lembrarCheckbox.checked = true;
}

const senhaInput = document.getElementById('senha');
    const togglePasswordButton = document.querySelector('.toggle-password');
    
    togglePasswordButton.addEventListener('click', function () {
        if (senhaInput.type === 'password') {
            senhaInput.type = 'text';
        } else {
            senhaInput.type = 'password';
        }
    });

