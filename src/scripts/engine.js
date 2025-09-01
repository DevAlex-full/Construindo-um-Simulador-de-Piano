const pianokeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input"); 
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];

const playTune = (key) => {
    // CORREÇÃO 1: Template literal corrigido com backticks
    const audio = new Audio(`src/tunes/${key}.wav`);
    audio.volume = volumeSlider.value;
    audio.play().catch(e => console.log('Erro ao reproduzir áudio:', e));

    // CORREÇÃO 2: Template literal corrigido para o querySelector
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    
    // CORREÇÃO 3: Verificar se o elemento existe antes de manipular
    if (clickedKey) {
        clickedKey.classList.add("active");
        setTimeout(() => {
            clickedKey.classList.remove("active");
        }, 150);
    }
};

// Função para lidar com eventos de toque (mobile)
const handleTouchStart = (e) => {
    e.preventDefault(); // Previne comportamentos padrão do touch
    const key = e.target.closest('.key');
    if (key) {
        playTune(key.dataset.key);
    }
};

// Função para lidar com cliques (desktop e mobile)
const handleClick = (e) => {
    const key = e.target.closest('.key');
    if (key) {
        playTune(key.dataset.key);
    }
};

// Adiciona eventos para cada tecla
pianokeys.forEach((key) => {
    // Eventos de mouse (desktop)
    key.addEventListener("click", handleClick);

    // Eventos de toque (mobile)
    key.addEventListener("touchstart", handleTouchStart, { passive: false });

    // Mapeia as teclas para uso com teclado
    mapedKeys.push(key.dataset.key);
});

// Evento de teclado (apenas desktop)
document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
});

// CORREÇÃO 4: Função de volume removida (não estava sendo usada)
// O volume já é controlado diretamente no playTune através do volumeSlider.value

// Função para mostrar/esconder letras das teclas
const showHiderKeys = () => {
    pianokeys.forEach(key => key.classList.toggle("hide"));
};

// Eventos para controles
// CORREÇÃO 5: Removido evento desnecessário do volumeSlider
keysCheck.addEventListener("click", showHiderKeys);

// Previne zoom no iOS ao tocar rapidamente
document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener('touchend', function(e) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);