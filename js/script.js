var popup = document.querySelector('.subscribe-popup');
var link = document.querySelector('.address-button');
var closeButton = document.querySelector('.popup-close-button');
var login = popup.querySelector('[name="person-name"]');
var email = popup.querySelector('[name="person-email"]');
var textarea = popup.querySelector('[name=textarea]');
var form = popup.querySelector('.popup-form');
var storage = localStorage.getItem('name');

var isStorageSupport = true;
var storage = '';

link.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.add('popup-show');
	if (storage) {
		login.value = storage;
		email.focus();
	} else {
		login.focus();
	}
});

closeButton.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.remove('popup-show');
	popup.classList.remove('modal-error');
});

form.addEventListener('submit', function(evt) {
	if (!login.value || !email.value || !textarea.value) {
		evt.preventDefault();
		popup.classList.remove('modal-error');
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add('modal-error');
	} else {
		if (isStorageSupport) {
			localStorage.setItem('name', login.value);
		}
	}
});

window.addEventListener('keydown', function(evt) {
	if (evt.keyCode === 27) {
		if (popup.classList.contains('popup-show')) {
			popup.classList.remove('popup-show');
			popup.classList.remove('modal-error');
		}
	}
});
