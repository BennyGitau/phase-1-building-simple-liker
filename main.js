// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


//adding a class hidden
const hidden = document.querySelector('#modal')
hidden.classList.add("hidden");

//loadidng the DOM
document.addEventListener("DOMContentLoaded", () => {
//selecting all the empty hearts
  const selectedHearts = document.getElementsByClassName('like-glyph');


  for (heart of selectedHearts) {
//adding event listener to hearts to activate them
    heart.addEventListener('click', (e) => {
  //simulating server request
      mimicServerCall()
      .then(heart => {
        e.target.innerText = FULL_HEART;
        e.target.classList.add('activated-heart')
       
      }) 
//displaying error message
      .catch(error => {
        const modal = document.querySelector('#modal');
        const errorMessage = document.querySelector('#modal-message');
        errorMessage.innerHTML = error;
        modal.classList.remove('hidden')
// error message to disapper after three seconds
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 3000)

      })
    });
  }
  



//grab activated hearts
const activatedHearts = document.querySelectorAll('.activated-heart')
console.log(activatedHearts)
  for(heart of activatedHearts) {
//add event listener to change active listener to empty on click
    heart.addEventListener('click', (event) => {
    event.target.innerHTML = EMPTY_HEART;
    event.target.classList.remove('activated-heart')
  });
};
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
