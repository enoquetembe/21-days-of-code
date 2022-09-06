
const format = (digit) => `0${digit}`.slice(-2);

const updateTime = (time) => {

    const seconds = document.querySelector('#seconds');
const minutes = document.querySelector('#minutes');
const hours = document.querySelector('#hours');
const days = document.querySelector('#days');


    const amountOfSeconds = time % 60;
    const amountOfMinutes =  Math.floor((time % (60 * 60)) / 60 );
    const amountOfHours = Math.floor((time % (60 * 60 * 24)) / (60*60))
    const amountOfDays = Math.floor(time /  (60 * 60 * 24))

    
    seconds.textContent = format(amountOfSeconds);
    minutes.textContent = format(amountOfMinutes);
    hours.textContent = format(amountOfHours);
    days.textContent = format(amountOfDays);

    
}

const countdown = (time) => {

    const stopCounting = () => {
        clearInterval(id)
    }

    const counting = () => {

        if(time === 0) {
            stopCounting();
        }

       updateTime(time);
        time--;
    }

    const id = setInterval(counting, 1000);
}

const timeLeft = () => {

    const date= new Date ('2022-8-24 19:59:00');
    const today = Date.now();
    return Math.floor((date - today) / 1000);
}

countdown(timeLeft());
