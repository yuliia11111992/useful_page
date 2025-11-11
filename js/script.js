/**
 * FAQ аккордеон - переключение открытия/закрытия вопросов
 */
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Закрыть все другие элементы FAQ
    document.querySelectorAll('.crypto-edu-faq-item').forEach(item => {
        item.classList.remove('active');
        const questionSpan = item.querySelector('.crypto-edu-faq-question span');
        if (questionSpan) {
            questionSpan.textContent = '+';
        }
    });
    
    // Открыть текущий элемент, если он был закрыт
    if (!isActive) {
        faqItem.classList.add('active');
        const currentSpan = element.querySelector('span');
        if (currentSpan) {
            currentSpan.textContent = '−';
        }
    }
}

/**
 * Прокрутка к форме с плавной анимацией
 */
function scrollToForm() {
    const formElement = document.getElementById('application-form');
    if (formElement) {
        formElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Обработка отправки формы
 */
function handleSubmit(event) {
    event.preventDefault();
    
    // Собираем данные формы
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Логируем данные (здесь можно добавить отправку на сервер)
    console.log('Отправка заявки:', data);
    
    // Показываем уведомление пользователю
    alert('✅ Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    
    // Очищаем форму после успешной отправки
    event.target.reset();
    
    // Здесь можно добавить реальную отправку данных:
    // fetch('/api/submit', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    // })
    // .then(response => response.json())
    // .then(result => {
    //     console.log('Успешно отправлено:', result);
    // })
    // .catch(error => {
    //     console.error('Ошибка отправки:', error);
    //     alert('❌ Произошла ошибка. Попробуйте позже.');
    // });
}

/**
 * Настройка наблюдателя для анимации элементов при скролле
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Применяем анимацию к элементам с классом animate-in
    document.querySelectorAll('.crypto-edu-animate-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

/**
 * Эффект курсора - отслеживание движения мыши
 * (можно использовать для дополнительных визуальных эффектов)
 */
function initMouseTracking() {
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Здесь можно добавить кастомные эффекты, связанные с курсором
        // Например, свечение или trail эффект
    });
}

/**
 * Инициализация всех функций при загрузке DOM
 */
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initMouseTracking();
    
    console.log('🚀 Сайт "Обучение безопасной работе с криптовалютами" загружен');
});

/**
 * Дополнительная функция для плавного появления элементов
 * при загрузке страницы
 */
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});