'use strict';

const faqs = document.querySelectorAll('.faq');
const questions = document.querySelectorAll('.question');
const arrows = document.querySelectorAll('.arrow');

const handleQuestionClick = function () {
	const faq = this.parentElement;
	const arrow = this.querySelector('.arrow');
	const isActive = faq.classList.contains('active');
	console.log(isActive);

	// Remove ACTVE class from all faq elements
	faqs.forEach(faq => faq.classList.remove('active'));

	// Rotate Arrows to 0 deg
	arrows.forEach(arrow => (arrow.style.transform = 'rotate(0deg)'));

	if (!isActive) {
		// Toggle ACTVE class for the current faq element
		faq.classList.add('active');

		// Rotate the arrow for the current faq element
		arrow.style.transform = 'rotate(180deg)';
	}
};

questions.forEach(question =>
	question.addEventListener('click', handleQuestionClick)
);
