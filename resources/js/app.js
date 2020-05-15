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


  const onClickQuestion = e => {
    const $question = e.currentTarget
    const $answer = $question.parentElement.querySelector(".answer")
    if ($answer.classList.contains('hide')) {
      $answer.classList.remove('hide')
    } else {
      $answer.classList.add('hide')
    }
  };

  const onClickSidebar = () => {
    if ($sidebar.classList.contains('sidebar-hide')) {
      $sidebar.classList.remove('sidebar-hide')
    } else {
      $sidebar.classList.add('sidebar-hide')
    }
  }

  init = () => {
    $questions.forEach((question) =>
      question.addEventListener(`click`, onClickQuestion)
    );
    $sidebar.addEventListener(`click`, onClickSidebar)
  };
  init();
}
