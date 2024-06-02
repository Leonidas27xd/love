function promptPassword() {
    const password = prompt("Nuestras 3 fechas");
    if (password === "182731") {
        openCard();
    } else {
        alert("hey hey -_-, piense bien las fechas");
        
    }
}

function openCard() {
    document.getElementById('card').classList.add('hidden');
    document.getElementById('messageCard').classList.remove('hidden');
}

function showNeonText() {
    document.getElementById('neonContainer').classList.remove('hidden');
}
function showNeonText() {
    document.getElementById('card').classList.add('hidden');
    document.getElementById('messageCard').classList.add('hidden');
    document.getElementById('neonContainer').classList.remove('hidden');
    document.getElementById('messageText').classList.remove('hidden');
    document.getElementById('teAmoText').classList.remove('hidden');
}

