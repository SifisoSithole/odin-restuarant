import '../../styles/menu-hero.css';

function createHeroImage(){
    const heroImageDiv = document.createElement('div');
    heroImageDiv.id = 'menu-hero';

    const heading = document.createElement('p');
    heading.innerHTML = 'OUR <b>MENU<b>';
    const text = document.createElement('p');
    text.innerHTML = 'Everything we have to offer at one glance'
    heroImageDiv.appendChild(heading);
    heroImageDiv.appendChild(text);

    return heroImageDiv;
}

export default createHeroImage;