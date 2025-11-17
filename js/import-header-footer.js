const selectedPageClass = 'selectedPage';
const pages = [
    '', // Home 
    'blog',
    'contato'
];

document.addEventListener("DOMContentLoaded", async function () {
    try {

        // Import header
        let headerResponse = await fetch('components/header.html');
        let headerData = await headerResponse.text();
        document.body.insertAdjacentHTML('afterbegin', headerData);

        // Import footer
        let footerResponse = await fetch('components/footer.html');
        let footerData = await footerResponse.text();
        document.body.insertAdjacentHTML('beforeend', footerData);

        // Define selected page
        let path = window.location
            .pathname
            .replace("/", '')
            .replace('.html', '');

        // Apply selected class to menu item
        let menu = document.getElementById('menu');
        pages.filter(page => page === path).forEach(page => {
            let index = pages.indexOf(page);
            menu.children[index] // <li> element
                .children[0] // <a> element
                .classList.add(selectedPageClass);
        });

    } catch (error) {
        console.error('Error while loading header and footer:', error);
    }
});

