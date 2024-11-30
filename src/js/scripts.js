/* @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@ DROPDOWN - DROPDOWN - DROPDOWN - DROPDOWN @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/


/* DROPDOWN AO CLICAR EM ALGUM LINK, O DROPDOWN SE FECHA @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ */


document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const dropdownMenu = document.getElementById('dropdown-menu');
    
    // Alternar visibilidade do dropdown ao clicar no botão
    menuBtn.addEventListener('click', (event) => {
        // Impede que o clique no menu-btn se propague para o document
        event.stopPropagation();
        const isVisible = dropdownMenu.style.display === 'block';
        // Alterna entre mostrar e esconder o menu
        dropdownMenu.style.display = isVisible ? 'none' : 'block';
    });

    // Fechar o menu caso clique fora dele
    document.addEventListener('click', (event) => {
        // Verifica se o clique foi fora do menu e do botão de menu
        if (!menuBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none'; // Fecha o menu
        }
    });

    // Fechar o dropdown ao clicar em um dos links dentro do menu
    const links = dropdownMenu.querySelectorAll('a'); // Seleciona todos os links dentro do dropdown
    links.forEach(link => {
        link.addEventListener('click', () => {
            dropdownMenu.style.display = 'none'; // Fecha o menu
        });
    });
});


/* dropdowndo link fechar END ### DROPDOWN END AO CLICAR ################################### */


/* ######################################################################################
######### DROPDOWN END - DROPDOWN END - DROPDOWN END - DROPDOWN END ###################*/




/*  @@@@@@@@@@@@@@@@ SCRIPT SLIDE DEPOIMENTOS DEPOIMENTS @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/




/* SCRIPT SLIDES DEPOIMENTS DEPOIMENTOS END END END ###########################################
####################################################################################################*/


/* ANIMATES @@@@@@@@@@@@@@@@@@@@@@@@@ */


// Função para observar os elementos
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Adiciona classe visível
      }
    });
  });
  
  // Seleciona todos os elementos com classes de animação
  const animatedElements = document.querySelectorAll('.animate-top, .animate-fade, .animate-right, .animate-left');
  
  // Observa cada elemento
  animatedElements.forEach((el) => observer.observe(el));
  

/*ANIMATES END ########################### */


/* @@@@ SURGIR QUANDO PASSAR PELA MARCAÇÃO EFEITO @@@@@@@@@@@@ */


/* ########## surgir maração efeito end end efeto ############# */

