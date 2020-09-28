var togglerBtn = document.querySelector('.header__toggler-menu'),
    topBtn = document.querySelector('.header__toggler-menu .top'),
    midBbt = document.querySelector('.header__toggler-menu .mid'),
    botBtn = document.querySelector('.header__toggler-menu .bot'),
    mainMenu = document.querySelector('.header__nav');

togglerBtn.addEventListener('click', function() {
    topBtn.classList.toggle('active-top-btn');
    midBbt.classList.toggle('active-mid-btn');
    botBtn.classList.toggle('active-bot-btn');
    mainMenu.classList.toggle('active-main-menu');
});