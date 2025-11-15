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