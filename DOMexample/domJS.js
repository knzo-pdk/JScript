const container = document.querySelector('#container');

const contentP = document.createElement('p');
const contenth3 = document.createElement('h3');
const contentdiv = document.createElement('div');

const contenth1 = document.createElement('h1');
const contentp = document.createElement('p');

contenth1.textContent = 'I\'m in a div';
contentp.textContent = 'ME TOO!';

contentdiv.appendChild(contenth1);
contentdiv.appendChild(contentp);

contentP.textContent = 'Hey I\'m red';
contentP.style.color = 'red';

contenth3.textContent = 'I\'m a blue h3';
contenth3.style.color = 'blue';

contentdiv.setAttribute('style', 'border-style: solid; border-color: black; background-color:pink ')

container.appendChild(contentP);
container.appendChild(contenth3);
container.appendChild(contentdiv);
// appends content as the last child of container
/**
   div.style.color = 'blue';                                      
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white;';          
// adds several style rules

div.setAttribute('style', 'color: blue; background: white;');    
// adds several style rules
 */