const stone = document.querySelector(".stone");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const form = document.querySelector(".form");
const background = document.querySelector(".background2");
const restartplay = document.querySelector(".restartplay");
let skor1 = document.querySelector(".skor1");
let skor2 = document.querySelector(".skor2");

function click1(e) {
    stone.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    const stone1 = document.createElement("div");
    stone1.className = "stone1";
    let stone1_1 = stone1;
    stone1_1 = 0;

    const stone2 = document.createElement("div");
    stone2.className = "stone2";
    const paper2 = document.createElement("div");
    paper2.className = "paper2";
    const scissors2 = document.createElement("div");
    scissors2.className = "scissors2";

    let skor1Sayac = Number(skor1.innerHTML);
    let skor2Sayac = Number(skor2.innerHTML);


    let rastgele = Math.floor(Math.random(0) * 3);

    if (rastgele == 0) {
        background.appendChild(stone1);
        background.appendChild(stone2);
    } else if (rastgele == 1) {
        background.appendChild(stone1);
        background.appendChild(paper2);
        skor2.innerHTML = skor2Sayac + 1;
    } else {
        background.appendChild(stone1);
        background.appendChild(scissors2);
        skor1.innerHTML = skor1Sayac + 1;
    }

    e.preventDefault();
    setTimeout(function () {
        stone1.remove();
        stone2.remove();
        paper2.remove();
        scissors2.remove();
        if (skor1.innerHTML == 3) {
            skor2.innerHTML = skor2Sayac - skor2Sayac;
            skor1.innerHTML = skor1Sayac - skor1Sayac;
            const finish = document.createElement("div");
            finish.className = "finish";
            const finishyazi = document.createElement("p");
            finishyazi.className = "finishyazi";
            finishyazi.textContent = "KAZANDINIZ";
            const restart = document.createElement("a");
            restart.href = "index.html";
            restart.className = "restart";
            restart.textContent = "TEKRAR OYNA";
            const menu = document.createElement("a");
            menu.href = "anasayfa.html";
            menu.className = "menu";
            menu.textContent = "MENÜ";
            background.appendChild(finish);
            background.appendChild(finishyazi);
            background.appendChild(restart);
            background.appendChild(menu);
        } else if (skor2.innerHTML == 3) {
            skor2.innerHTML = skor2Sayac - skor2Sayac;
            skor1.innerHTML = skor1Sayac - skor1Sayac;
            const finish = document.createElement("div");
            finish.className = "finish";
            const finishyazi = document.createElement("p");
            finishyazi.className = "finishyazi";
            finishyazi.textContent = "KAYBETTİNİZ";
            const restart = document.createElement("a");
            restart.href = "index.html";
            restart.className = "restart";
            restart.textContent = "TEKRAR OYNA";
            const menu = document.createElement("a");
            menu.href = "anasayfa.html";
            menu.className = "menu";
            menu.textContent = "MENÜ";
            background.appendChild(finish);
            background.appendChild(finishyazi);
            background.appendChild(restart);
            background.appendChild(menu);
        } else {
            stone.disabled = false;
            paper.disabled = false;
            scissors.disabled = false;
        }
    }, 2000);

}
stone.onclick = click1;

function click2(e) {
    stone.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    const paper1 = document.createElement("div");
    paper1.className = "paper1";
    let paper1_1 = paper1;
    paper1_1 = 0;

    const stone2 = document.createElement("div");
    stone2.className = "stone2";
    const paper2 = document.createElement("div");
    paper2.className = "paper2";
    const scissors2 = document.createElement("div");
    scissors2.className = "scissors2";

    let skor1Sayac = Number(skor1.innerHTML);
    let skor2Sayac = Number(skor2.innerHTML);


    let rastgele = Math.floor(Math.random(0) * 3);

    if (rastgele == 0) {
        background.appendChild(paper1);
        background.appendChild(stone2);
        skor1.innerHTML = skor1Sayac + 1;
    } else if (rastgele == 1) {
        background.appendChild(paper1);
        background.appendChild(paper2);
    } else {
        background.appendChild(paper1);
        background.appendChild(scissors2);
        skor2.innerHTML = skor2Sayac + 1;
    }

    e.preventDefault();
    setTimeout(function () {
        paper1.remove();
        stone2.remove();
        paper2.remove();
        scissors2.remove();
        if (skor1.innerHTML == 3) {
            skor2.innerHTML = skor2Sayac - skor2Sayac;
            skor1.innerHTML = skor1Sayac - skor1Sayac;
            const finish = document.createElement("div");
            finish.className = "finish";
            const finishyazi = document.createElement("p");
            finishyazi.className = "finishyazi";
            finishyazi.textContent = "KAZANDINIZ";
            const restart = document.createElement("a");
            restart.href = "index.html";
            restart.className = "restart";
            restart.textContent = "TEKRAR OYNA";
            const menu = document.createElement("a");
            menu.href = "anasayfa.html";
            menu.className = "menu";
            menu.textContent = "MENÜ";
            background.appendChild(finish);
            background.appendChild(finishyazi);
            background.appendChild(restart);
            background.appendChild(menu);
        } else if (skor2.innerHTML == 3) {
            skor2.innerHTML = skor2Sayac - skor2Sayac;
            skor1.innerHTML = skor1Sayac - skor1Sayac;
            const finish = document.createElement("div");
            finish.className = "finish";
            const finishyazi = document.createElement("p");
            finishyazi.className = "finishyazi";
            finishyazi.textContent = "KAYBETTİNİZ";
            const restart = document.createElement("a");
            restart.href = "index.html";
            restart.className = "restart";
            restart.textContent = "TEKRAR OYNA";
            const menu = document.createElement("a");
            menu.href = "anasayfa.html";
            menu.className = "menu";
            menu.textContent = "MENÜ";
            background.appendChild(finish);
            background.appendChild(finishyazi);
            background.appendChild(restart);
            background.appendChild(menu);
        } else {
            stone.disabled = false;
            paper.disabled = false;
            scissors.disabled = false;
        }
    }, 2000);
}
paper.onclick = click2;

function click3(e) {
    stone.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    const scissors1 = document.createElement("div");
    scissors1.className = "scissors1";
    let scissors1_1 = scissors1;
    scissors1_1 = 0;

    const stone2 = document.createElement("div");
    stone2.className = "stone2";
    const paper2 = document.createElement("div");
    paper2.className = "paper2";
    const scissors2 = document.createElement("div");
    scissors2.className = "scissors2";

    let skor1Sayac = Number(skor1.innerHTML);
    let skor2Sayac = Number(skor2.innerHTML);


    let rastgele = Math.floor(Math.random(0) * 3);

    if (rastgele == 0) {
        background.appendChild(scissors1);
        background.appendChild(stone2);
        skor2.innerHTML = skor2Sayac + 1;
    } else if (rastgele == 1) {
        background.appendChild(scissors1);
        background.appendChild(paper2);
        skor1.innerHTML = skor1Sayac + 1;
    } else {
        background.appendChild(scissors1);
        background.appendChild(scissors2);
    }

    e.preventDefault();
    setTimeout(function () {
        scissors1.remove();
        stone2.remove();
        paper2.remove();
        scissors2.remove();
        if (skor1.innerHTML == 3) {
            skor2.innerHTML = skor2Sayac - skor2Sayac;
            skor1.innerHTML = skor1Sayac - skor1Sayac;
            const finish = document.createElement("div");
            finish.className = "finish";
            const finishyazi = document.createElement("p");
            finishyazi.className = "finishyazi";
            finishyazi.textContent = "KAZANDINIZ";
            const restart = document.createElement("a");
            restart.href = "index.html";
            restart.className = "restart";
            restart.textContent = "TEKRAR OYNA";
            const menu = document.createElement("a");
            menu.href = "anasayfa.html";
            menu.className = "menu";
            menu.textContent = "MENÜ";
            background.appendChild(finish);
            background.appendChild(finishyazi);
            background.appendChild(restart);
            background.appendChild(menu);
        } else if (skor2.innerHTML == 3) {
            skor2.innerHTML = skor2Sayac - skor2Sayac;
            skor1.innerHTML = skor1Sayac - skor1Sayac;
            const finish = document.createElement("div");
            finish.className = "finish";
            const finishyazi = document.createElement("p");
            finishyazi.className = "finishyazi";
            finishyazi.textContent = "KAYBETTİNİZ";
            const restart = document.createElement("a");
            restart.href = "index.html";
            restart.className = "restart";
            restart.textContent = "TEKRAR OYNA";
            const menu = document.createElement("a");
            menu.href = "anasayfa.html";
            menu.className = "menu";
            menu.textContent = "MENÜ";
            background.appendChild(finish);
            background.appendChild(finishyazi);
            background.appendChild(restart);
            background.appendChild(menu);
        } else {
            stone.disabled = false;
            paper.disabled = false;
            scissors.disabled = false;
        }
    }, 2000);
}
scissors.onclick = click3;

function click4() {
    let skor1Sayac = Number(skor1.innerHTML);
    let skor2Sayac = Number(skor2.innerHTML);
    skor2.innerHTML = skor2Sayac - skor2Sayac;
    skor1.innerHTML = skor1Sayac - skor1Sayac;
}
restartplay.onclick = click4();
