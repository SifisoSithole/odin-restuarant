import '../styles/footer.css';

function createFooter(){
    const divElement = document.createElement('div');
    const footer = document.createElement('footer');
    const p = document.createElement('p');
    const b = document.createElement('b');

    const footerText = divElement.cloneNode();
    footerText.id = 'footer-text';

    b.innerHTML = 'WOWW RESTAURANT';
    const restaurantName = p.cloneNode();
    restaurantName.appendChild(b);
    footerText.appendChild(restaurantName);

    const address = divElement.cloneNode();
    address.id = 'footer-address';
    address.innerHTML = '40 Sandown Road <br>Rondebosch, 7700, Cape Town';
    footerText.appendChild(address);

    const phoneNumber = divElement.cloneNode();
    phoneNumber.id = 'footer-number';
    phoneNumber.innerHTML = '+27 61 858 4378';
    footerText.appendChild(phoneNumber);

    const email = divElement.cloneNode();
    email.id = 'footer-email';
    email.innerHTML = 'sitholesifisobrian@gmail.com';
    footerText.appendChild(email);

    for (let i = 0; i < 4; i++){
        footer.appendChild(footerText.cloneNode(true));
    }

    return footer;
}

export default createFooter;