let regButton = document.getElementById("regular");
let speButton = document.getElementById("special");
let currentLevel = document.getElementById("current-level");
let desiredLevel = document.getElementById("desired-level");
let regBool = true;
let iron = document.getElementById("iron");
let fIron = document.getElementById("forged-iron");
let gIron = document.getElementById("galvanized-iron");
let hIron = document.getElementById("hardened-iron");
let crystal = document.getElementById("lumenite-crystal");
let simulacrum = document.getElementById("simulacrum");
let scrap = document.getElementById("scrap");

function ChangeTypeToSpecial() {
    if (regButton.classList.contains("clicked")) {
        speButton.classList.add("clicked");
        regButton.classList.remove("clicked");
    }
    regBool = false;
    SpeicalLevel();
}

function ChangeTypeToRegular() {
    if (speButton.classList.contains("clicked")) {
        regButton.classList.add("clicked");
        speButton.classList.remove("clicked");  
    }
    regBool = true;
    RegularLevel();
}

function RegularLevel() {

    currentLevel.innerHTML = "";
    let first_option = document.createElement("option");
    first_option.value = "";
    first_option.textContent = "Select an option";
    currentLevel.append(first_option);

    for (let i = 0; i <= 20; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = "+" + i;
        currentLevel.append(option);
    }
}
function SpeicalLevel() {

    currentLevel.innerHTML = "";
    let first_option = document.createElement("option");
    first_option.value = "";
    first_option.textContent = "Select an option";
    currentLevel.append(first_option);
    for (let i = 0; i <= 10; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = "+" + i;
        currentLevel.append(option);
    }
}

function SetDesiredLevel() {
    let base = parseInt(currentLevel.value);
    desiredLevel.innerHTML = "";
    let first_option = document.createElement("option");
    first_option.value = "";
    first_option.textContent = "Select an option";
    desiredLevel.append(first_option);

    let maxValue = 0;
    if (regBool === true) {
        maxValue = 20;
    }
    else if (regBool === false){
        maxValue = 10;
    }

    if (base === maxValue) {
        let option = document.createElement("option");
        option.value = "";
        option.textContent = "Already at Max Level";
        desiredLevel.append(option);
    }
    else {

        for (let i = base + 1; i <= maxValue; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.textContent = "+" + i;
            desiredLevel.append(option);
        }
    }
    CalculateCost();
}

function CalculateCost() {
    let totalScrap = 0;
    let totalIron = 0;
    let totalFIron = 0;
    let totalGIron = 0;
    let totalHIron = 0;
    let totalCrystal = 0;
    let totalSim = 0;
    let x = parseInt(currentLevel.value);
    let y = parseInt(desiredLevel.value);
    if (regBool === true) {
        for (let i = x; i < y; i++) {
            totalScrap += (((i) * 20) + 200);
            if (i <= 4) {
                totalIron += (((i) * 2) + 4);
            }
            else if (i <= 9) {
                totalFIron += (((i - 5) * 2) + 4);
            }
            else if (i <= 14) {
                totalGIron += (((i - 10) * 2) + 4);
            }
            else if (i <= 18) {
                totalHIron += (((i - 15) * 2) + 4);
            }
            else if (i === 19) {
                simulacrum.textContent = 1;
            }
        }

    }
    else {
        for (let i = x; i < y; i++) {
            totalScrap += (((i) * 75) + 450);
            if (i <= 2) {
                totalIron += (((i) * 5) + 5);
            }
            else if (i <= 4) {
                totalFIron += (((i - 3) * 5) + 15);
            }
            else if (i <= 6) {
                totalGIron += (((i - 5) * 5) + 15);
            }
            else if (i <= 8) {
                totalHIron += (((i - 7) * 5) + 15);
            }
            else if (i === 9) {
                totalSim = 1;
            }
        }
        for (let i = x; i < y; i++) {
            if (i <= 3) {
                totalCrystal +=2;
            }
            else if (i <= 6) {
                totalCrystal +=3;
            }
            else if (i <= 8) {
                totalCrystal += 4;
            }
            else if (i === 9) {
                totalCrystal += 5;
            }
        }
    }
    iron.textContent = totalIron;
    fIron.textContent = totalFIron;
    gIron.textContent = totalGIron;
    hIron.textContent = totalHIron;
    crystal.textContent = totalCrystal;
    simulacrum.textContent = totalSim;
    scrap.textContent = totalScrap;
}


regButton.addEventListener("click", ChangeTypeToRegular);
speButton.addEventListener("click", ChangeTypeToSpecial);

currentLevel.addEventListener("change", SetDesiredLevel);
desiredLevel.addEventListener("change", CalculateCost);