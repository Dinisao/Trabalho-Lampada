const img = document.getElementById('lampada');
const botao = document.getElementById('botao');
let ligada = false;

botao.addEventListener('click', () => {
  ligada = !ligada;

  if (ligada) {
    img.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
    botao.textContent = 'Apagar';
    botao.className = 'apagar';
    document.body.style.backgroundColor = '#ffe680'; // Fundo claro
    document.body.style.color = '#000';
  } else {
    img.src = 'https://www.w3schools.com/js/pic_bulboff.gif';
    botao.textContent = 'Acender';
    botao.className = 'acender';
    document.body.style.backgroundColor = '#222'; // Fundo escuro
    document.body.style.color = '#fff';
  }
});