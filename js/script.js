
//Плавающий header
let lastScrollTop = 0;
const header = document.getElementById('header');
 
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
       
        header.style.transform = 'translateY(-170%)'; 
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
const successBlock = document.querySelector('.suscribiete__newsletter-form-block-success'); 
const newsletterForm = document.getElementById('newsletterForm'); 

// Проверка email при вводе
emailInput.addEventListener('input', function() {
    const emailPattern = /^[^@]+@[^s@]+.[^s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        errorMessage.style.display = 'block'; 
        emailInput.classList.add('error'); 
        emailInput.classList.remove('success');
        errorIcon.style.display = 'block';
        successIcon.style.display = 'none'; 
    } else {
        errorMessage.style.display = 'none'; 
        emailInput.classList.remove('error'); 
        emailInput.classList.add('success'); 
        errorIcon.style.display = 'none'; 
        successIcon.style.display = 'block'; 
    }
});

// Обработка отправки формы
newsletterForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (errorMessage.style.display === 'block') {
        return; 
    } 

 

    
    newsletterForm.style.opacity = 0; 

    setTimeout(() => {
        newsletterForm.style.display = 'none';
        successBlock.classList.add('show'); 
    }, 500); 

    // Очищаем форму
    emailInput.value = ''; 
    subscribeCheckbox.checked = false; 
    successIcon.style.display = 'none'; 
    emailInput.classList.remove('success'); 
});





        //Аккордеон

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const parent = header.parentElement;

       
        if (window.innerWidth < 700) {

            // Закрываем все остальные аккордеоны
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content) {
                    item.style.display = 'none';
                    item.parentElement.classList.remove('active');
                }
            });

            // Переключаем видимость текущего аккордеона
            if (content.style.display === 'block') {
                content.style.display = 'none';
                parent.classList.remove('active');
            } else {
                content.style.display = 'block';
                parent.classList.add('active');
            }
        }
    });
});