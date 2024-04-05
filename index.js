window.addEventListener('load', () => {
    const defaultTab = document.getElementById('defaultOpen');
    defaultTab.classList.add('active');

    const defaultContent = document.getElementById('defaultContent');
    defaultContent.classList.add('active');

    const defaultAccordions = document.querySelectorAll('#defaultAccordion');
    defaultAccordions.forEach(accordion => {
        accordion.classList.add('active');
    });

    const tabs = document.querySelectorAll('.tab');
    const allContent = document.querySelectorAll('.content');

    const accordions = document.querySelectorAll('.accordion');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => { tab.classList.remove('active') });
            tab.classList.add('active');
            allContent.forEach(content => { content.classList.remove('active') });
            allContent[index].classList.add('active');
        });
    });

    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            accordion.classList.toggle('active');
        });
    });
});