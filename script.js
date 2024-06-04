document.addEventListener('DOMContentLoaded', function() {
    const targetDate = new Date('2024-06-19T00:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('contagem').innerHTML = "🎉";
            document.getElementById('countdown').innerHTML = "As férias chegaram, aproveite!";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);

    updateCountdown();
});
