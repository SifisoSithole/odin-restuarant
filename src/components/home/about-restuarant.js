import wine from '../../images/wine-845x684.jpg';
import pizza from '../../images/pizza-1030x687.jpg';
import pasta from '../../images/pasta-710x375.jpg';
import '../../styles/about-restuarant.css';

function createAboutRestaurant() {
    const images = [wine, pizza, pasta];
    const aboutDiv = document.createElement('div');
    const aboutTextDiv = document.createElement('div');
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 5000;

    const slideShow = document.createElement('div');
    aboutDiv.appendChild(slideShow);
    aboutDiv.id = 'about-container'
    slideShow.classList.add('slideshow-container');

    images.forEach((imageUrl, index) => {
        const slide = document.createElement('div');
        slide.classList.add('mySlides');
        if (index === 0) {
            slide.style.display = 'block';
        }

        const image = document.createElement('img');
        image.id = 'slide-show-image';
        image.src = imageUrl;

        slide.appendChild(image);
        slideShow.appendChild(slide);
    });

    const prevButton = document.createElement('a');
    prevButton.textContent = '❮';
    prevButton.classList.add('prev');
    prevButton.addEventListener('click', () => showSlide(-1));

    const nextButton = document.createElement('a');
    nextButton.textContent = '❯';
    nextButton.classList.add('next');
    nextButton.addEventListener('click', () => showSlide(1));

    slideShow.appendChild(prevButton);
    slideShow.appendChild(nextButton);

    function showSlide(direction) {
        clearInterval(slideInterval);
        currentSlide += direction;
        if (currentSlide < 0) {
            currentSlide = images.length - 1;
        } else if (currentSlide >= images.length) {
            currentSlide = 0;
        }

        const slides = document.querySelectorAll('.mySlides');
        slides.forEach((slide, index) => {
            slide.style.display = index === currentSlide ? 'block' : 'none';
        });

        startSlideInterval();
    }

    function startSlideInterval() {
        slideInterval = setInterval(() => {
            showSlide(1);
        }, intervalTime);
    }

    startSlideInterval();

    const heading = document.createElement('h2');
    heading.innerHTML = 'AMAZING MEALS <span id="amp">&</span><br><br> <b>GREAT ENTERTAINMENT<b>';
    heading.classList.add('special_amp');
    aboutTextDiv.id = 'about-text';
    aboutTextDiv.appendChild(heading);
    const p = document.createElement('p');
    p.innerHTML = 'We hope to see you soon!';
    aboutTextDiv.appendChild(p);
    const p2 = document.createElement('p');
    p2.innerHTML = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.';
    aboutTextDiv.appendChild(p2);
    const p3 = document.createElement('p');
    p3.innerHTML = 'Venenatis Nulla consequat massa quis enim. Doncus ut, imperdiet a. dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.';
    aboutTextDiv.appendChild(p3);

    const secondTextDiv = document.createElement('div')
    secondTextDiv.id = 'additional-text';

    const div = document.createElement('div');
    div.id = 'brown-rect';

    secondTextDiv.appendChild(div);

    const p4 = document.createElement('p');
    p4.innerHTML = 'Nulla consequat massa quis enim. Doncus ut, imperdiet a.';
    secondTextDiv.appendChild(p4);

    aboutTextDiv.appendChild(secondTextDiv);
    aboutDiv.appendChild(aboutTextDiv);

    return aboutDiv;
}

export default createAboutRestaurant;