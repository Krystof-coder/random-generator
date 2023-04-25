//! variables for random generating

let numFrom;
let numTo;
let numOutput;
let randomNumberOut;


//# random number generating

function randomNumber(params) {
    numFrom = document.getElementById('num-from').value;
    numTo = document.getElementById('num-to').value;

    if (numFrom === "" || numTo === "") {
        if (numFrom === "" && numTo !== "") {
            numTo = parseFloat(numTo);
            numFrom = numTo - 100;

            getRandomNum(numFrom, numTo);
            }
        else if (numTo === "" && numFrom !== "") {
            numFrom = parseFloat(numFrom);
            numTo = numFrom + 100;

            getRandomNum(numFrom, numTo);
        }
        else {
            document.getElementById('numErrMes').innerHTML =
            `<p>add at least one number!</p>`;
        }
    }
    else {
        numFrom = parseFloat(numFrom);
        numTo = parseFloat(numTo)

        getRandomNum(numFrom, numTo);
    }
}

//# animation

function getRandomNum(from, to) {
    let int = null;
    let turn = 1;
    let ring = document.getElementById('ring');
    let stop;

    document.getElementById('numErrMes').innerHTML = null;

    if ((from - to) > 10 || (from - to) < -10) {

        stop = 20
    }
    else {
        stop = 10;
    }

    clearInterval(int)

    int = setInterval(gener, 100);
        
    ring.style.animationPlayState = "running";

    function gener() {
        if (turn == stop) {
            document.getElementById('output').innerHTML =
            Math.floor(Math.random() * (to - from + 1) + from);

            ring.style.animationPlayState = "paused";
            clearInterval(int)
        } else {
            turn++;

            document.getElementById('output').innerHTML =
            Math.floor(Math.random() * (to - from + 1) + from);
        }
    }

    };