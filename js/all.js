window.addEventListener("keydown", play, false);
window.addEventListener("keyup", stop, false);


function play(e){
    const keyboard = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${keyboard}"]`);
    const keynum = document.querySelector(`div[data-key="${keyboard}"]`);
    if (keyboard == keynum.dataset.key) {
      keynum.setAttribute("class", "playing");
      audio.play();
    }
}
    
function stop(e){
    const keyboard = e.keyCode;
    const audio = document.querySelector(`audio[data-key="${keyboard}"]`);
    const keynum = document.querySelector(`div[data-key="${keyboard}"]`);
    if (keyboard == keynum.dataset.key) {
      keynum.setAttribute("class", "key");
      audio.load();
    }
}
