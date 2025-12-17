// ОПТИМИЗАЦИЯ: Быстрая прокрутка без задержки
// Этот файл убирает задержку при клике на меню
// НЕ ВЛИЯЕТ на автоматическое выделение при прокрутке!

(function() {
    'use strict';
    
    console.log('✅ scroll-fix.js загружен');
    
    // Добавляем CSS для мгновенного закрытия меню
    const style = document.createElement('style');
    style.textContent = `
        /* Мгновенное закрытие мобильного меню */
        .navbar-collapse.collapsing {
            transition: none !important;
            height: 0 !important;
            display: none !important;
        }
        
        /* Ускоряем переходы */
        .navbar-collapse {
            transition: height 0.1s ease !important;
        }
    `;
    document.head.appendChild(style);
    
    // Ждём загрузки DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        console.log('🚀 scroll-fix.js инициализирован');
        
        // Получаем только ссылки навигационного меню
        const menuLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
        
        console.log('📋 Найдено ссылок меню:', menuLinks.length);
        
        menuLinks.forEach((link, index) => {
            const href = link.getAttribute('href');
            console.log(`  ${index + 1}. ${href} - ${link.textContent.trim()}`);
            
            link.addEventListener('click', function(e) {
                const targetHref = this.getAttribute('href');
                
                console.log('🖱️ Клик на:', targetHref);
                
                // Игнорируем пустые якоря
                if (targetHref === '#' || targetHref === '#!' || targetHref.length <= 1) {
                    return;
                }
                
                e.preventDefault();
                e.stopPropagation();
                
                // МГНОВЕННО закрываем мобильное меню
                const navCollapse = document.querySelector('.navbar-collapse');
                if (navCollapse && navCollapse.classList.contains('show')) {
                    console.log('📱 Закрываю мобильное меню');
                    navCollapse.classList.remove('show');
                    navCollapse.classList.remove('collapsing');
                    navCollapse.style.display = '';
                }
                
                // Убираем backdrop
                const backdrop = document.querySelector('.modal-backdrop');
                if (backdrop) {
                    backdrop.remove();
                }
                
                // Сбрасываем body
                document.body.classList.remove('modal-open');
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';
                
                // Прокрутка к секции
                const target = document.querySelector(targetHref);
                if (!target) {
                    console.error('❌ Секция не найдена:', targetHref);
                    return;
                }
                
                const navbar = document.querySelector('#navbar');
                const headerTop = document.querySelector('.header-top');
                
                let totalHeight = 0;
                if (navbar) totalHeight += navbar.offsetHeight;
                if (headerTop && window.getComputedStyle(headerTop).display !== 'none') {
                    totalHeight += headerTop.offsetHeight;
                }
                
                if (totalHeight === 0) totalHeight = 100;
                
                const targetPosition = target.getBoundingClientRect().top + 
                                     window.pageYOffset - 
                                     totalHeight - 20;
                
                console.log('📍 Прокрутка к позиции:', Math.round(targetPosition));
                
                // Используем requestAnimationFrame для мгновенной реакции
                requestAnimationFrame(() => {
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    console.log('✅ Прокрутка начата');
                });
                
            }, false);
        });
        
        console.log('✅ scroll-fix.js готов к работе');
        console.log('📌 Автоматическое выделение меню управляется language.js');
    }
    
})();
