function disco() {
    let elements = document.getElementsByTagName('*');
    for (var i = elements.length - 1; i >= 0; i--) { 
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256); 
        elements[i].style.color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256); 
        elements[i].style.backgroundColor = '#'+r.toString(16)+g.toString(16)+b.toString(16);
    }
    setTimeout(disco, 100);
}

// модалка с предупреждением
let warning = document.querySelector('.are-you-sure');
let discoBtn = document.querySelector('.js-wanna-disco');
let discoGoBack = document.querySelector('.js-want-go-back');
let discoSure = document.querySelector('.js-im-sure');

discoBtn.addEventListener('click', () => { 
    warning.classList.remove('hidden');
});

discoGoBack.addEventListener('click', () => {
    warning.classList.add('hidden');
});

discoSure.addEventListener('click', () => {
    warning.classList.add('hidden');
    disco();
    discoBtn.innerHTML = "хватит!";

});
