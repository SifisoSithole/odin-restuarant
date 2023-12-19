import createHeader from './components/header';
import createWhiteHeader from './components/white-header';
import createFooter from './components/footer';
import createHomePage from './components/home/home';
import createMenuPage from './components/menu/menu'
import createWowRestaurantDiv from './components/contact/contact';
import './styles/style.css'

(() => {
    const content = document.querySelector('.content');
    const header = createHeader();
    const whiteHeader = createWhiteHeader();
    const home = createHomePage();
    const footer = createFooter();
    const menu = createMenuPage();
    const contact = createWowRestaurantDiv();
    let currentPage = home;

    let isScrolled = false;

    content.appendChild(header);

    document.querySelector('#home-link').addEventListener('click', () => {
        if (currentPage !== home){
            content.removeChild(currentPage);
            content.insertBefore(home, footer);
            currentPage = home;
        }
    });

    document.querySelector('#menu-link').addEventListener('click', () => {
        if (currentPage !== menu){
            content.removeChild(currentPage);
            content.insertBefore(menu, footer);
            currentPage = menu;
        }
    });

    document.querySelector('#contact-link').addEventListener('click', () => {
        if (currentPage !== contact){
            content.removeChild(currentPage);
            content.insertBefore(contact, footer);
            currentPage = contact;
        }
    });

    window.addEventListener('scroll', () => {
        if (!isScrolled){
            content.removeChild(header);
            content.appendChild(whiteHeader);
            isScrolled = true;

            document.querySelector('#white-home-link').addEventListener('click', () => {
                if (currentPage !== home){
                    content.removeChild(currentPage);
                    content.insertBefore(home, footer);
                    currentPage = home;
                }
            });
        
            document.querySelector('#white-menu-link').addEventListener('click', () => {
                if (currentPage !== menu){
                    content.removeChild(currentPage);
                    content.insertBefore(menu, footer);
                    currentPage = menu;
                }
            });

            document.querySelector('#white-contact-link').addEventListener('click', () => {
                if (currentPage !== contact){
                    content.removeChild(currentPage);
                    content.insertBefore(contact, footer);
                    currentPage = contact;
                }
            });
        }

        if (document.documentElement.scrollTop === 0) {
            content.removeChild(whiteHeader);
            content.appendChild(header);
            isScrolled = false;       
        }
    })

    content.appendChild(home);
    content.appendChild(footer);
})();