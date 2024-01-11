window.addEventListener("DOMContentLoaded", function () {
    const formImc = document.querySelector("#formImc");
  
    formImc.addEventListener("submit", function (event) {

      event.preventDefault();
  
 
      const peso = document.querySelector("#peso").value;

      const altura = document.querySelector("#altura").value;

      const imc = peso / (altura * altura);

      const resultado = document.querySelector("imc");

      document.querySelector("#imc").innerHTML = imc;
  
      const caixaLilas = document.querySelector(".lilas");
      const caixaVerde = document.querySelector(".verde");
      const caixaAmarela = document.querySelector(".amarela");
      const caixaRosa = document.querySelector(".rosa");
  

      caixaLilas.classList.add("apagada");
      caixaVerde.classList.add("apagada");
      caixaAmarela.classList.add("apagada");
      caixaRosa.classList.add("apagada");
  
  
      if (imc < 18.5) {
        caixaLilas.classList.remove("apagada");
      } else if (imc >= 18.5 && imc < 25) {
        caixaVerde.classList.remove("apagada");
      } else if (imc >= 25 && imc < 30) {
        caixaAmarela.classList.remove("apagada")
      } else {
        caixaRosa.classList.remove("apagada")
      }
      
      document.getElementById('resultado').textContent = 'Seu IMC é: ' + imc.toFixed(2);
    

    });
  });

