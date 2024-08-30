// Menu Mobile
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
}
// Mostra Telefone
function mostrarTelefone(element) {
    element.innerText = '(99) 99999-9999';
}

// Máscara CPF
function applyCPFMask(input) {
    input.value = input.value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

// Máscara Telefone
function applyPhoneMask(input) {
    input.value = input.value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4,5})(\d{4})$/, '$1-$2');
}

// Enviar Mensagem
function sendMessage() {
    alert('Mensagem Enviada!');
}

// Regra de 3
function calculaRegraDeTres() {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const value3 = document.getElementById('value3').value;
    const result = (value2 * value3) / value1;
    document.getElementById('result').value = result;
}

// Modal
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}


  window.addEventListener('load', function() {
    document.querySelector('.img-zoomout').classList.add('zoom-in');
  });

  document.addEventListener("DOMContentLoaded", function() {
    function downloadImage() {
        const section = document.querySelector('.download-section');

        if (section) {
            html2canvas(section).then(function(canvas) {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'imovel_guide.png';
                link.click();

                /*alert('Imagem baixada com sucesso!');*/
            }).catch(function(error) {
                /*alert('Ocorreu um erro ao baixar a imagem: ' + error);*/
            });
        } else {
            /*alert('Elemento download-section não encontrado!');*/
        }
    }

    document.querySelector('.button-download').addEventListener('click', downloadImage);
});