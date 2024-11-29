/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@ DROPDOWN - DROPDOWN - DROPDOWN - DROPDOWN @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const dropdownMenu = document.getElementById('dropdown-menu');

    // Alternar visibilidade do dropdown ao clicar no botão
    menuBtn.addEventListener('click', () => {
        const isVisible = dropdownMenu.style.display === 'block';
        dropdownMenu.style.display = isVisible ? 'none' : 'block';
    });

    // Fechar o menu caso clique fora dele
    document.addEventListener('click', (event) => {
        if (!menuBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});





/* ######################################################################################
######### DROPDOWN END - DROPDOWN END - DROPDOWN END - DROPDOWN END ###################*/


/* esconder o botão .agendar-consulta-btn2 AO ROLAR A IMAGEM @@@@@@@@@@@@@@*/

document.addEventListener("scroll", function () {
    const button = document.querySelector(".agendar-consulta-btn2");
    const topnavHeight = document.querySelector(".topnav").offsetHeight;
    const scrollPosition = window.scrollY;

    // Se a rolagem for menor que a altura do topo, o botão some
    if (scrollPosition < topnavHeight) {
        button.style.display = "none";
    } else {
        button.style.display = "flex"; // Reaparece
    }
});


/*############### BTN2 END ####################################################333*/


/*  @@@@@@@@@@@@@@@@ SCRIPT SLIDE DEPOIMENTOS DEPOIMENTS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/




/* SCRIPT SLIDES DEPOIMENTS DEPOIMENTOS END END END ###########################################
####################################################################################################*/


/* ANIMATES @@@@@@@@@@@@@@@@@@@@@@@@@ */


// Função para observar os elementos
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Adiciona a classe visível
      }
    });
  });
  
  // Seleciona os elementos com a classe de animação
  const elements = document.querySelectorAll('.animate-top');
  
  // Observa cada elemento
  elements.forEach((el) => observer.observe(el));
  


/*ANIMATES END ########################### */