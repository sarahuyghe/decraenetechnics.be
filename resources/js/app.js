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

  const onMouseEnterSideBar = () => {
    $sidebar.classList.remove('sidebar-hide')
  }

  const onMouseOutSideBar = () => {
    $sidebar.classList.add('sidebar-hide')

  }

  const checkposition = () => {
    if (screen.width > 992) {
      var windowY = window.scrollY
      if (windowY < $scrollPosition) {
        $metaMenu.classList.remove('scrolling')
      } else {
        $metaMenu.classList.add('scrolling')
      }
    }
  }

  init = () => {
    window.addEventListener(`scroll`, checkposition)
    $questions.forEach((question) =>
      question.addEventListener(`click`, onClickQuestion)
    );
    $sidebar.addEventListener(`mouseover`, onMouseEnterSideBar)
    $sidebar.addEventListener(`mouseout`, onMouseOutSideBar)



  };
  init();
}
