// getElementsByTagName()
// getElementsByClassName()
// getElementById()

// querySelector()
// querySelector(h1,p)
// querySelectorAll()
// let res = document.querySelectorAll('h1,h2');
// console.log(res);

// let myElement= document.querySelectorAll('h1,p');
// console.log(myElement);

// .value
// innerHTML = "---"
// innerText
// let innerText = document.querySelector('#result-col h2').innerText;
// console.log('innerText',innerText);


// let myValue = document.querySelector('#first-num').value;
// console.log({myValue});
// document.querySelector('#first-num').value = "Updated";

// Event - click
const button = document.querySelector('#btn-calculate');
button.addEventListener('click',function(event){
  const firstNum = Number(document.querySelector('#first-num').value);
  const secondNum = Number(document.querySelector('#second-num').value);
  const resultElement = document.querySelector("#result");
  const value = (document.querySelector('.form-select').value);
  console.log(value);
  
  resultElement.innerHTML = firstNum + secondNum;
});

// getAttribute()
// setAttribute()
// Change or update class
// --- Changing Styles
// .style
// .style.{property}
// .className = "{className}"
// .classList.add({className});
// .classList.remove({className});
// .classList.toggle({});





