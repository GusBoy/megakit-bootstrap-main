/**
 * АВТОМАТИЧЕСКОЕ ВЫДЕЛЕНИЕ АКТИВНОГО ПУНКТА МЕНЮ ПРИ СКРОЛЛЕ
 * Следит за позицией скролла и подсвечивает соответствующий пункт меню
 */

(function() {
    'use strict';
    
    console.log('✅ menu-highlight.js загружен');
    
    // Ждём загрузки DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        console.log('🎯 Инициализация отслеживания меню');
        
        // Получаем все секции и ссылки меню
        const sections = [];
        const menuLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
        
        menuLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href !== '#' && href.length > 1) {
                const section = document.querySelector(href);
                if (section) {
                    sections.push({
                        id: href,
                        element: section,
                        link: link
                    });
                }
            }
        });
        
        console.log('📋 Найдено секций для отслеживания:', sections.length);
        
        if (sections.length === 0) {
            console.warn('⚠️ Не найдено секций для отслеживания');
            return;
        }
        
        // Функция определения активной секции
        function updateActiveMenu() {
            const navbar = document.querySelector('#navbar');
            const scrollPosition = window.pageYOffset + (navbar ? navbar.offsetHeight : 100) + 50;
            
            let activeSection = null;
            
            // Определяем какая секция сейчас видна
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                const sectionTop = section.element.offsetTop;
                
                if (scrollPosition >= sectionTop) {
                    activeSection = section;
                    break;
                }
            }
            
            // Если мы в самом верху страницы, активна первая секция
            if (window.pageYOffset < 100) {
                activeSection = sections[0];
            }
            
            // Обновляем классы активности
            sections.forEach(section => {
                const parentLi = section.link.closest('.nav-item');
                if (section === activeSection) {
                    parentLi.classList.add('active');
                    console.log('🎯 Активная секция:', section.id);
                } else {
                    parentLi.classList.remove('active');
                }
            });
        }
        
        // Вызываем сразу при загрузке
        updateActiveMenu();
        
        // Отслеживаем скролл с throttling для производительности
        let ticking = false;
        
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    updateActiveMenu();
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        console.log('✅ menu-highlight.js готов к работе');
    }
    
})();
