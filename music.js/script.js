let boxImg = document.querySelectorAll('.box')


boxImg.forEach(key => {
    key.onclick = (e) =>{
        let key = e.target;
        let note = document.getElementById(key.dataset.note);
        // console.log(note);
        note.currentTime = 0;
        note.play();
     }
});

document.onkeydown = (e) => {
    let key = e.key;
    // let drum = document.querySelector('[data-d='+key+']');
    let audio = document.querySelector('[data-a='+key+']');
    console.log(audio);
   audio.currentTime = 0;
   audio.play();
}

