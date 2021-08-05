console.log('works');

let screenWidth = window.screen.width;
let image = document.querySelector('.js-image');
image.style.width = `${screenWidth}px`;




// console.log('works');

// let screenWidth = window.screen.width;
// let image = document.querySelector('.js-image');
// image.style.width = `${screenWidth}px`;

// загрузка страницы - проверить localStorage на время, если нет - время 0


        //   //получаем значение времени трека из локального хранилища
// 
        // if (playTime == null) { //если значение не установлено...        
        //   audio.currentTime = 0.0; //запускаем трек с самого начала
            // }
        // else { //если какое-то значение есть...     
        //   audio.currentTime = playTime; //перемещаем бегунок на эту позицию...
            // }
        // audio.play(); //...и запускаем воспроизведение
        // window.onunload = function(){ //в случае закрытия или перезагрузки страницы
        //   localStorage.setItem('time', audio.currentTime); //записываем в хранилище время трека, на котором прервались
        // }
// 
        let audio = document.querySelector('.audio-js')
        let audioButton = document.querySelector('.audio-button')
        let audioIcon = document.querySelector('.js-audio-logo')
        let playTime = localStorage.getItem('time');

        audioButton.addEventListener('click', () => {
            if (audio.duration == 0 && playTime == null) {
                audioIcon.src='images/speaker.svg';
                audio.currentTime = 0.0;
                audio.play();
                playTime = 0;
            } else if (audio.duration == 0 && playTime != null && audio.paused) {
                audio.currentTime = playTime;
                audio.play();
                audioIcon.src = 'images/speaker.svg';
            } else if (!audio.paused) {
                audioIcon.src='images/mute.svg';
                audio.pause()
                playTime = audio.currentTime;
            }  else {
                audioIcon.src='images/speaker.svg';
                audio.play()
            }
        })

        // window.addEventListener('onunload', () => {
        //         localStorage.setItem('time', audio.currentTime);
        // })
        window.onunload = function(){ //в случае закрытия или перезагрузки страницы
        localStorage.setItem('time', audio.currentTime); //записываем в хранилище время трека, на котором прервались
        alert('подумой');
        }