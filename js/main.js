const inputNumber1 = document.getElementById('number1');
inputNumber1.addEventListener('keypress',  handleKeyPress);
 
const inputNumber2 = document.getElementById('number2');
inputNumber2.addEventListener('keypress', handleKeyPress);

const btnPlus = document.getElementById('btn-plus');
btnPlus.addEventListener("click", handleBtnPlusClick);

const btnTimes = document.getElementById('btn-times');
btnTimes.addEventListener('click', handleBtnTimesClick);

const btnClear = document.getElementById('btn-clear');
btnClear.addEventListener('click', handleBtnClearClick);

const inputError = document.querySelector('[class="form-input input-error"]');
inputError.classList.remove('input-error');

const resultBox = document.getElementById('result-box');

function handleBtnPlusClick() {
    inputErrors();

    if(isNumber(inputNumber1.value) && isNumber(inputNumber2.value)) {
        resultBox.innerHTML = Number(inputNumber1.value) + Number(inputNumber2.value);
    }
}

function handleBtnTimesClick() {
    inputErrors();

    if (isNumber(inputNumber1.value) && isNumber(inputNumber2.value)) {
        resultBox.innerHTML = Number(inputNumber1.value) * Number(inputNumber2.value);
    }
}

function handleBtnClearClick() {
    inputNumber1.value = "";
    inputNumber2.value = "";
    resultBox.innerHTML = "0";
    inputNumber1.classList.remove("input-error");
    inputNumber2.classList.remove("input-error");
}

function inputErrors() {
    if(!isNumber(inputNumber1.value)) {
        inputNumber1.classList.add("input-error");
    }
    else {
        inputNumber1.classList.remove("input-error");
    }
    if(!isNumber(inputNumber2.value)) {
        inputNumber2.classList.add("input-error");
    }
    else {
        inputNumber2.classList.remove("input-error");
    }
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function handleKeyPress(event) {
    let theEvent = event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    let regex = /^-?\d*\.?\d*$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }