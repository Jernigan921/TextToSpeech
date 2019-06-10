/*
 *  @author: Tim Jernigan 
 *  date: 6.10.2019
 *  description: allows you to paste or write information and have it 
 * read to you. 
 */

const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// add listener to btn
btn.addEventListener('click', function() {
    const words = document.getElementById("message").value;
    console.log(words);
    readOutLoud(words);
});

function readOutLoud(message) {
    // This is a catch for Internet Explorer. 
    try {
        const speech = new SpeechSynthesisUtterance();
        speech.text = message;
        speech.volume = 1; // 0 - 1 (softest to loudest)
        speech.rate = 1; // 1 is normal 
        speech.pitch = 1;
    
        window.speechSynthesis.speak(speech);
    } catch(e){
        console.log("Error Catch");
        alert("Your web browser does not support Speech Synthesis");
    }

}