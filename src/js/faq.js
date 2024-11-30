document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');
  
    questions.forEach((question) => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isVisible = answer.style.display === 'block';
  
        // Esconde todas as respostas
        document.querySelectorAll('.answer').forEach((ans) => {
          ans.style.display = 'none';
        });
  
        // Alterna a visibilidade da resposta clicada
        answer.style.display = isVisible ? 'none' : 'block';
      });
    });
  });
  