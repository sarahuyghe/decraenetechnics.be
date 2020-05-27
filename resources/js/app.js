/**
 *  Main application javascript file
 *  Theme Name: Decraene Technics by digital astronaut
 *  Theme URI: https://decraenetechnics.be/
 *  Author: Tim Camerlinckx / digital astronaut
 *  Author URI: https://digitalastronaut.be/
 *  Version: 1.0.0
 */

{
  const $questions = document.querySelectorAll(".question");
  const $sidebar = document.querySelector(".sidebar");
  const $metaMenu = document.querySelector("nav");
  const $scrollPosition = 50;



  const onClickQuestion = e => {
    const $question = e.currentTarget
    const $answer = $question.parentElement.querySelector(".answer")
    if ($answer.classList.contains('hide')) {
      $answer.classList.remove('hide');
      $question.classList.add('question-open')
      $question.classList.remove('question-closed')

    } else {
      $answer.classList.add('hide')
      $question.classList.remove('question-open')
      $question.classList.add('question-closed')
    }
  };

  const onClickSidebar = () => {
    if ($sidebar.classList.contains('sidebar-hide')) {
      $sidebar.classList.remove('sidebar-hide')
    } else {
      $sidebar.classList.add('sidebar-hide')
    }
  }

  const checkposition = () => {
    var windowY = window.scrollY
    if (windowY < $scrollPosition) {
      $metaMenu.classList.remove('test')
    } else {
      $metaMenu.classList.add('test')
    }
  }

  init = () => {
    window.addEventListener(`scroll`, checkposition)
    $questions.forEach((question) =>
      question.addEventListener(`click`, onClickQuestion)
    );
    $sidebar.addEventListener(`click`, onClickSidebar)


  };
  init();
}
