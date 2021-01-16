// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


function addEventListeners() {
  let likes = document.getElementsByClassName("like-glyph");
  for(let like of likes){
    like.addEventListener('click', handleLikeClick) 
  }
}

function toggleHeart(e) {
  e.target.innerText == EMPTY_HEART ? e.target.innerText = FULL_HEART : e.target.innerText = EMPTY_HEART;
}

function handleLikeClick(e) {
  mimicServerCall()
  .then(() => toggleHeart(e))
  .catch(error => handleError(error))
}

function handleError(error){
  let modal = document.getElementById("modal");
  modal.classList.toggle("hidden");
  let messageP = document.getElementById("modal-message");
  messageP.textContent = error;
  setTimeout(modal.classList.toggle("hidden"), 5000);
}

addEventListeners();


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
