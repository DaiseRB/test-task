const links = document.querySelectorAll('.popup_link');
const catalogLinks = document.querySelectorAll('.catalog_link');
const productName = document.querySelector('#product_name');

const form = document.forms['form'];
const button = document.querySelector('#popup_form_submit');

const inputArr = document.querySelectorAll('.form-input');
const validInputArr = [];

inputArr.forEach((elem) => {
    if (elem.hasAttribute('data-reg')) {
        elem.setAttribute('is-valid',"0");
        validInputArr.push(elem);
    }
});

//Добавление названия в форму
if (links.length>0) {
    for (let i=0; i<links.length; i++) {
        links[i].addEventListener('click', function() {
            productName.value=catalogLinks[i].innerText;
        })
    }
}

//Проверка полей формы на валидность
form.addEventListener('input', inputHandler);
//Отправка формы
button.addEventListener('click', buttonHandler);


function inputHandler({target}) {
    if (target.hasAttribute('data-reg')) {
        inputCheck(target);
    }
}

function inputCheck(elem) {
    const inputValue = elem.value;
    const inputReg = elem.getAttribute('data-reg');
    const reg = new RegExp(inputReg);
    if (reg.test(inputValue)) {
        elem.style.border = "2px solid rgb(0, 196, 0)";
        elem.setAttribute('is-valid',"1");
    } else {
        elem.style.border = "2px solid rgb(255, 0, 0)";
        elem.setAttribute('is-valid',"0");
    }
}

function buttonHandler(e) {
    const allValid = [];
    validInputArr.forEach((elem) => {
        allValid.push(elem.getAttribute('is-valid'));
    });
    const isAllValid = allValid.reduce((acc, current) => {
        return acc && current;
    });
    
    if (!Boolean(Number(isAllValid))) {
        e.preventDefault();
    }
}
    




