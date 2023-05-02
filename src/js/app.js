import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    spaceBetween: 24,
    slidesPerView: 'auto',

    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.reviews__button-next',
        prevEl: '.reviews__button-prev',
    },

});
const { innerWidth } = window
const container = document.querySelector('.container')
const reviewsInner = document.querySelector('.reviews__inner')



const faqInner = document.querySelector('.faq__inner')
const faqAnswers = document.querySelectorAll('.faq__answers-item')
const faqButtons = document.querySelectorAll('.faq__button')
const faqText = document.querySelectorAll('.faq__text')

function removeClassList(element, classList) {
    element.forEach(item => item.classList.remove(classList))
}

faqInner.addEventListener('click', function (event) {
    const target = event.target
    const id = target.dataset.id

    if (target.classList.contains('faq__button') && !target.classList.contains('faq__button--mob')) {
        removeClassList(faqButtons, 'faq__button--active')
        target.classList.add('faq__button--active')
        removeClassList(faqAnswers, 'faq__answers-item--active')
        faqAnswers[id].classList.add('faq__answers-item--active')
    }
    if (target.classList.contains('faq__button--mob')) {
        target.classList.toggle('faq__button--active')
        target.nextElementSibling.classList.toggle('faq__text--active')
    }
    if (target.classList.contains('faq__close')) {
        removeClassList(faqAnswers, 'faq__answers-item--active')
        removeClassList(faqButtons, 'faq__button--active')
    }
    return
})