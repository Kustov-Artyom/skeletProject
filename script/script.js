'use strict'

const accordeonQuestions = document.querySelectorAll('.accordeon__question');
console.log(accordeonQuestions);

accordeonQuestions.forEach((accordeonQuestion) => {
    const clickedAnswer = accordeonQuestion.parentElement.querySelector(".accordeon__answer");
    if (clickedAnswer.classList.contains("accordeon__answer--visible")) {
        clickedAnswer.style.maxHeight = clickedAnswer.scrollHeight + "px";
    } else {
        clickedAnswer.style.maxHeight = null;
    }

    accordeonQuestion.addEventListener("click", function () {
        const clickedAnswer = accordeonQuestion.parentElement.querySelector(".accordeon__answer");

        accordeonQuestion.classList.toggle("accordeon__question--active");

        clickedAnswer.classList.toggle("accordeon__answer--visible");

        if (clickedAnswer.classList.contains("accordeon__answer--visible")) {
            clickedAnswer.style.maxHeight = clickedAnswer.scrollHeight + "px";
        } else {
            clickedAnswer.style.maxHeight = null;
        }
    });
});

const btnOpen = document.querySelector(".answer__btn");
const modal = document.querySelector(".modal");
const wrapper = document.querySelector(".modal__wrapper")

function modalViewHandler ()  {
    modal.classList.toggle('modal--open');
}

btnOpen.addEventListener('click', modalViewHandler);
modal.addEventListener('click', modalViewHandler);
wrapper.addEventListener('click', modalViewHandler);
close.addEventListener('click', modalViewHandler);