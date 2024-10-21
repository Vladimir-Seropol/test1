
//Плавающий header
let lastScrollTop = 0;
const header = document.getElementById('header');
 
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
       
        header.style.transform = 'translateY(-150%)'; 
    } else {
        
        header.style.transform = 'translateY(0)'; 
    }
    
    lastScrollTop = scrollTop; 
});

//Валидация формы

const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const errorIcon = document.querySelector('.error-icon');
const successIcon = document.querySelector('.success-icon');
const subscribeCheckbox = document.getElementById('checkbox'); 
const successBlock = document.querySelector('.suscribiete__newsletter-form-block-success'); // Блок успеха
const newsletterForm = document.getElementById('newsletterForm'); // Форма

// Проверка email при вводе
emailInput.addEventListener('input', function() {
    const emailPattern = /^[^s@]+@[^s@]+.[^s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        errorMessage.style.display = 'block'; 
        emailInput.classList.add('error'); 
        emailInput.classList.remove('success'); // Удаляем класс успеха
        errorIcon.style.display = 'block';
        successIcon.style.display = 'none'; 
    } else {
        errorMessage.style.display = 'none'; 
        emailInput.classList.remove('error'); 
        emailInput.classList.add('success'); // Добавляем класс успеха
        errorIcon.style.display = 'none'; 
        successIcon.style.display = 'block'; 
    }
});

// Обработка отправки формы
newsletterForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение отправки формы

    if (errorMessage.style.display === 'block') {
        return; // Если есть ошибка, выходим из функции
    } 

    // Здесь вы можете добавить логику для отправки данных на сервер, если нужно

    // Плавное исчезновение формы
    newsletterForm.style.opacity = 0; 

    setTimeout(() => {
        newsletterForm.style.display = 'none'; // Скрываем форму после завершения анимации
        successBlock.classList.add('show'); // Показываем блок успеха
    }, 500); // Время соответствует времени перехода в CSS

    // Очищаем форму
    emailInput.value = ''; 
    subscribeCheckbox.checked = false; 
    successIcon.style.display = 'none'; 
    emailInput.classList.remove('success'); // Убираем класс успеха после очистки
});