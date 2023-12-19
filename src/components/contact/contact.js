import createHeroImage from './hero';

function createWowRestaurantDiv() {
    var container = document.createElement('div');
    container.appendChild(createHeroImage());
    var wowDiv = document.createElement('div');
    container.appendChild(wowDiv);
    wowDiv.id = 'wow-restaurant';
  
    var heading = document.createElement('h1');
    heading.textContent = 'Wow Restaurant';
  
    var aboutInfo = document.createElement('p');
    aboutInfo.textContent = 'Experience the finest in South African cuisine at Wow Restaurant. Our gourmet dishes are crafted with passion and creativity, providing a dining experience like no other.';
  
    var contactForm = document.createElement('form');
    contactForm.id = 'contact-form';
  
    var nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    var nameInput = document.createElement('input');
    nameInput.type = 'text';
  
    var emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email:';
    var emailInput = document.createElement('input');
    emailInput.type = 'email';
  
    var messageLabel = document.createElement('label');
    messageLabel.textContent = 'Message:';
    var messageInput = document.createElement('textarea');
  
    var submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
  
    contactForm.appendChild(nameLabel);
    contactForm.appendChild(nameInput);
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(messageLabel);
    contactForm.appendChild(messageInput);
    contactForm.appendChild(submitButton);
  
    wowDiv.appendChild(heading);
    wowDiv.appendChild(aboutInfo);
    wowDiv.appendChild(contactForm);
  
    wowDiv.style.border = '2px solid #ccc';
    wowDiv.style.padding = '20px';
    wowDiv.style.maxWidth = '600px';
    wowDiv.style.margin = '0 auto';
  
    heading.style.color = '#333';
    heading.style.fontSize = '24px';
  
    aboutInfo.style.marginBottom = '20px';
  
    contactForm.style.display = 'grid';
    contactForm.style.gridGap = '10px';
  
    submitButton.style.backgroundColor = '#4CAF50';
    submitButton.style.color = 'white';
  
    return container;
}

export default createWowRestaurantDiv;