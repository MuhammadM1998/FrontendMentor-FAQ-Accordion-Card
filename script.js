'use strict';

const mainTexts = document.querySelectorAll('.main-text');

const handleClick = function () {
	const parent = this.parentElement;
	const arrow = this.querySelector('.arrow');

	arrow.style.transform = parent.classList.contains('active')
		? 'rotate(0deg)'
		: 'rotate(180deg)';
	parent.classList.toggle('active');
};
mainTexts.forEach(main => main.addEventListener('click', handleClick));
