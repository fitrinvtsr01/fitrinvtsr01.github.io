var pop = new Audio();
pop.src = "audio/pop.mp3"

// var win = new Audio();
// win.src = "audio/win.mp3"

var pemain = "X";
const restart = document.getElementById("restart");

document.getElementById("keterangan").innerHTML = "Giliran Pemain: " + pemain;

function kliktombol(x) {
    pop.play();

    document.getElementById("btn" + x + "-d").style.transform = "perspective(600px) rotateY(-180deg)";
    document.getElementById("btn" + x + "-b").style.transform = "perspective(600px) rotateY(0deg)";

    document.getElementById("btn" + x + "-b").innerHTML = pemain;
    document.getElementById("btn" + x + "-b").value = pemain;
    // x=btn-b
    document.getElementById("btn" + x + "-b").disabled = "disabled";
    if (pemain == "X") {
        document.getElementById("keterangan").innerHTML = "Giliran Pemain: O";
        cekPemenang();
        pemain = "O";
    } else {
        document.getElementById("keterangan").innerHTML = "Giliran Pemain: X";
        cekPemenang();
        pemain = "X";
    }

}

function cekPemenang() {
    if (document.getElementById("btn1-b").value == pemain &&
        document.getElementById("btn2-b").value == pemain &&
        document.getElementById("btn3-b").value == pemain) {
        menang(1, 2, 3);
    } else if (document.getElementById("btn4-b").value == pemain &&
        document.getElementById("btn5-b").value == pemain &&
        document.getElementById("btn6-b").value == pemain) {
        menang(4, 5, 6);
    } else if (document.getElementById("btn7-b").value == pemain &&
        document.getElementById("btn8-b").value == pemain &&
        document.getElementById("btn9-b").value == pemain) {
        menang(7, 8, 9);
    } else if (document.getElementById("btn1-b").value == pemain &&
        document.getElementById("btn4-b").value == pemain &&
        document.getElementById("btn7-b").value == pemain) {
        menang(1, 4, 7);
    } else if (document.getElementById("btn2-b").value == pemain &&
        document.getElementById("btn5-b").value == pemain &&
        document.getElementById("btn8-b").value == pemain) {
        menang(2, 5, 8);
    } else if (document.getElementById("btn3-b").value == pemain &&
        document.getElementById("btn6-b").value == pemain &&
        document.getElementById("btn9-b").value == pemain) {
        menang(3, 6, 9);
    } else if (document.getElementById("btn1-b").value == pemain &&
        document.getElementById("btn5-b").value == pemain &&
        document.getElementById("btn9-b").value == pemain) {
        menang(1, 5, 9);
    } else if (document.getElementById("btn3-b").value == pemain &&
        document.getElementById("btn5-b").value == pemain &&
        document.getElementById("btn7-b").value == pemain) {
        menang(3, 5, 7);
    }

}

function menang(a, b, c) {
    // alert("Pemain " + pemain + " menang");
    document.getElementById("keterangan").innerHTML = "Pemenangnya Adalah Pemain: " + pemain;

    // jika fungsi menang sudah dijalankan maka semua button dimatikan, gameover
    for (i = 1; i < 10; i++) {
        document.getElementById("btn" + i + "-d").disabled = "disabled";
    }

    var x = 1;

    function animasi() {
        if (x == 1) {
            document.getElementById("btn" + a + "-b").style.background = "#ccc";
            document.getElementById("btn" + b + "-b").style.background = "#999";
            document.getElementById("btn" + c + "-b").style.background = "#666";
            x = 2;
        } else if (x == 2) {
            document.getElementById("btn" + c + "-b").style.background = "#ccc";
            document.getElementById("btn" + a + "-b").style.background = "#999";
            document.getElementById("btn" + b + "-b").style.background = "#666";
            x = 3;
        } else if (x == 3) {
            document.getElementById("btn" + b + "-b").style.background = "#ccc";
            document.getElementById("btn" + c + "-b").style.background = "#999";
            document.getElementById("btn" + a + "-b").style.background = "#666";
            x = 1;
        }
    }
    setInterval(animasi, 150);
}

function reset() {
    initialize();
}