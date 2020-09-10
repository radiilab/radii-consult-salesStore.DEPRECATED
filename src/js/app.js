import '../scss/main.scss';
import '../css/w3.css'
import '../css/w3-theme-black.css'
import { RandomGenerator } from './random-generator';

const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.textContent = RandomGenerator.randomInteger();
};

const outputRandomRange = () => {
    outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
};

const buttonRndInt = document.querySelector('#randomInt');
const buttonRndRange = document.querySelector('#randomRange');

buttonRndInt.addEventListener('click', outputRandomInt);
buttonRndRange.addEventListener('click', outputRandomRange);

// Reference messages collection
var messagesRef = firebase.database().ref('queryMessage');

// Listen for form submit
document.getElementById('queryForm').addEventListener('submit', submitQueryForm);

// Submit form
function submitQueryForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('queryForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }