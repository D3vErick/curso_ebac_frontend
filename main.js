const form = document.getElementById("formCalculo");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = document.getElementById('numberA').value;
    const numeroB = document.getElementById('numberB').value;
    const mensagemSucesso = `A comparação entre o número A: <b>${numeroA}</b> e o número B: <b>${numeroB}</b> é: B é maior que A!`;
    const mensagemErro = `A comparação entre o número A:  <b>${numeroA}</b> e o número B: <b>${numeroB}</b> é: A é maior que B!`;

    const containerMensagemSucesso = document.querySelector('.sucessMessage');
    const containerMensagemErro = document.querySelector('.errorMessage');

    if (Number(numeroB) >= Number(numeroA)) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'none';
    } else {
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';
    }

    document.getElementById('numeroA').value = '';
    document.getElementById('numeroB').value = '';
});


console.log('formCalculo');