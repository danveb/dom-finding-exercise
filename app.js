// DOM finding exercise 

// 1 Select the section with an id of container without using querySelector. 
document.getElementById('container'); 

// 2 Select the section with an id of container using querySelector.
document.querySelector('#container'); 

// 3 Select all of the list items with a class of “second”.
// --OR
// -- document.querySelectorAll(".second")
document.getElementsByClassName('second'); 
// document.querySelectorAll('.second'); 

// 4 Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector('ol .third'); 

// 5 Give the section with an id of container the text “Hello!”.
// document.querySelector('#container').innerText = 'Hello!';
const section = document.getElementById('container'); 
section.innerText = 'Hello!'; 

// 6 Add the class main to the div with a class of footer.
// initialize variable and target .footer
const footerDiv = document.querySelector('.footer'); 
// add a class 'main' 
footerDiv.classList.add('main'); 
// -- footer.className += "main";
footerDiv.className += 'main'; 

// 7 Remove the class main on the div with a class of footer. 
const footDiv = document.querySelector('.footer'); 
footDiv.classList.remove('main'); 
// footDiv; // <div class="footer"></div>  

// 8 Create a new li element. 
const newLi = document.createElement('li'); 

// 9 Give the li the text “four”. 
// -- newLi.innerText = "four"
newLi.innerText = 'four'; 

// 10 Append the li to the ul element. 
// initialize variable and target the ul 
const ul = document.querySelector('ul'); 
// append li to ul 
ul.append(newLi); 

// 11 Loop over all of the lis inside the ol tag and give them a background color of “green”. 
// initialize variable and target the ol (all lis)
const ollis = document.querySelectorAll('ol li');  
// for of loop for the li's 
for(let list of ollis) {
    list.style.backgroundColor = 'green'; 
}

// 12 Remove the div with a class of footer
// initialize variable and target .footer 
const rmDiv = document.querySelector('.footer'); 
rmDiv.remove(); 
