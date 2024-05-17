let timer;
let hours = 0;
let minutes = 0; //Contadores para armazenar o tempo
let seconds = 0;
let isStarted = false;

//Atualiza os elementos com os valores atuais de hours, minutes e seconds.
//Utilize `StrinString.padStart(2, '0') para garantir que os valores tenham sempre dois dígitos.

function updateDisplay() {
    document.getElementById('hora').textContent = String(hours).padStart(2, '0');
    document.getElementById('minuto').textContent = String(minutes).padStart(2, '0');
    document.getElementById('segundo').textContent = String(seconds).padStart(2, '0');
}

//Inicia o temporizador se ele ainda não estiver rodando (!timer).
//Aumenta os seconds a cada segundo, e ajusta minutes e hours conforme necessário.

function startTimer() {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
        isStarted = true;
        document.getElementById('stopButton').disabled = false;
    }
}
//Para o temporizador limpando o intervalo apenas se ele estiver rodando (if (timer)).
function stopTimer() {
    if (isStarted) {
        if (timer) {
            clearInterval(timer);
            timer = null;
            document.getElementById('stopButton').textContent = 'Continuar';
        } else {
            startTimer();
            document.getElementById('stopButton').textContent = 'Parar';
        }
    }
}

function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
    document.getElementById('stopButton').textContent = 'Parar';
    document.getElementById('stopButton').disabled = true;
    isStarted = false;
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

// Inicializa a exibição do temporizador
updateDisplay();