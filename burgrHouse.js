document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.slider-dot');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            let currentSlide = 0;
            let slideInterval;

            // Function to show a specific slide
            function showSlide(n) {
                // Remove active class from all slides and dots
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                // Update current slide index
                currentSlide = (n + slides.length) % slides.length;
                
                // Add active class to current slide and dot
                slides[currentSlide].classList.add('active');
                dots[currentSlide].classList.add('active');
            }

            // Function to show next slide
            function nextSlide() {
                showSlide(currentSlide + 1);
            }

            // Function to show previous slide
            function prevSlide() {
                showSlide(currentSlide - 1);
            }

            // Start automatic slideshow
            function startSlideShow() {
                slideInterval = setInterval(nextSlide, 10000); // Change slide every 10 seconds
            }

            // Stop automatic slideshow
            function stopSlideShow() {
                clearInterval(slideInterval);
            }

            // Event listeners for navigation buttons
            nextBtn.addEventListener('click', () => {
                nextSlide();
                stopSlideShow();
                startSlideShow();
            });

            prevBtn.addEventListener('click', () => {
                prevSlide();
                stopSlideShow();
                startSlideShow();
            });

            // Event listeners for navigation dots
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    const slideIndex = parseInt(this.getAttribute('data-slide'));
                    showSlide(slideIndex);
                    stopSlideShow();
                    startSlideShow();
                });
            });

            // Pause slideshow when user hovers over the hero section
            const heroSection = document.querySelector('.hero-section');
            heroSection.addEventListener('mouseenter', stopSlideShow);
            heroSection.addEventListener('mouseleave', startSlideShow);

            // Initialize the slideshow
            startSlideShow();
        });

document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-link');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        });
 document.addEventListener('DOMContentLoaded', function() {
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                
                question.addEventListener('click', () => {
                    // Close all other FAQ items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                        });
                    
                    // Toggle current item
                    item.classList.toggle('active');
                });
            });
            
            // Close FAQ when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.faq-item')) {
                    faqItems.forEach(item => {
                        item.classList.remove('active');
                    });
                }
            });
});

function order(burgerName) {
    alert(`Thank you for ordering a ${burgerName}!`);
}

function submitForm(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    document.getElementById('contactForm').reset();
}

const answerDivOne = document.querySelector('.answerDivOne');
const answerDivTwo = document.querySelector('.answerDivTwo');
const answerDivThree = document.querySelector('.answerDivThree');

function getAnswer (num) {
        if (num =='One') {
            if(answerDivOne.style.display == 'none') {
                answerDivOne.style.display = 'block';
                answerDivOne.style.margin = '0 2rem 2rem 2rem';
                answerDivOne.style.padding = '1.5rem';
                answerDivOne.style.width = '90%';
                answerDivOne.style.border = '1px solid grey';
                answerDivTwo.style.display = 'none';
                answerDivThree.style.display ='none';
            }else 
                answerDivOne.style.display = 'none';

        } else if ( num == 'Two'){
             if(answerDivTwo.style.display == 'none') {
                answerDivTwo.style.display = 'block';
                answerDivTwo.style.margin = '0 2rem 2rem 2rem';
                answerDivTwo.style.padding = '1.5rem';
                answerDivTwo.style.width = '90%';
                answerDivTwo.style.border = '1px solid grey';
                answerDivThree.style.display ='none';
                answerDivOne.style.display ='none';
            }else 
                answerDivTwo.style.display = 'none';
        } else {
              if(answerDivThree.style.display == 'none') {
                answerDivThree.style.display = 'block';
                answerDivThree.style.margin = '0 2rem 2rem 2rem';
                answerDivThree.style.padding = '1.5rem';
                answerDivThree.style.width = '90%';
                answerDivThree.style.border = '1px solid grey';
                answerDivTwo.style.display = 'none';
                answerDivOne.style.display = 'none';
            }else 
                answerDivThree.style.display = 'none';
        }
    }
const fataMenu = document.querySelector('.fata');
const tbsiMenu = document.querySelector('.tbsi');
const fulMenu = document.querySelector('.ful');
const juiceMenu = document.querySelector('.juice');
const burgerMenu = document.querySelector('.burgers');

function menuDisplay(cata){
    alert(`This is ${cata} Menu`);
    if(cata == "fata"){
        fataMenu.style.display = 'grid';
        fulMenu.style.display = 'none';
        burgerMenu.style.display = 'none';
        tbsiMenu.style.display = 'none';
        juiceMenu.style.display = 'none';
    }else if(cata=="tbsi"){
        tbsiMenu.style.display = 'block';
        burgerMenu.style.display = 'none';
        fataMenu.style.display = 'none';
        fulMenu.style.display = 'none';
        juiceMenu.style.display = 'none';
    }else if (cata=="juice") {
        juiceMenu.style.display = 'block';
        burgerMenu.style.display = 'none';
        fataMenu.style.display = 'none';
        fulMenu.style.display = 'none';
        tbsiMenu.style.display = 'none';
    }else if(cata=='ful'){
        fulMenu.style.display = 'block';
        burgerMenu.style.display = 'none';
        tbsiMenu.style.display = 'none';
        fataMenu.style.display = 'none';
        juiceMenu.style.display = 'none';
    }


    

   /*  const answerOPen = document.getElementsByClassName('downIntity');
    answerOPen.addEventListener('click',function () {
        console.log('you clicked the answer button.')
    }) */
   /* menuArea.innerHTML = '';
    const menuItem = document.createElement('div');
   const menuName = document.createElement('h3');
   const menuDes = document.createElement('p');
   const inputOrder = document.createElement('input');
   const addButton = document.createElement('button');
   menuName.innerText = `${cata}`  
   menuDes.innerText = `Tasty and spicy ${cata}`
   inputOrder.type = 'number'
   inputOrder.value = '2'
   addButton.innerText ='Add To Cart'
   menuItem.appendChild(menuName);
   menuItem.appendChild(menuDes);
   menuItem.appendChild(inputOrder);
   menuItem.appendChild(addButton);
   menuArea.appendChild(menuItem); */
   
}