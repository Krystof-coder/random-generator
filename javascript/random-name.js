//! variables

let parent = document.getElementById('display-names');
let nameIn;
const names = [];
const displayNames = [];

function addName(params) {
    if (document.getElementById('name-in').value == "") {
        document.getElementById('nameErrMes').innerHTML =
        `<p>add the name</p>`;
    }
    else {
        names.push(document.getElementById('name-in').value);
        getDis()
        document.getElementById("display-names").innerHTML = displayNames.join('');
        document.getElementById('name-in').value = null;
        document.getElementById('nameErrMes').innerHTML = "";
        console.log(names);
    }
}

function getDis(params) {
    let index = names.length - 1;
    let id = index;
    displayNames.push(pattern(names[index], id))
}

function pattern(name, id) {
    return `<h3 id="${id}">${id + 1 }. ${name}
    <div>
        <button onclick="edit(this)">
            <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
        </button>
        <button onclick="remove(this)">
            <svg stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" xmlns="http://www.w3.org/2000/svg"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
        </button>
    </div>
    </h3>`;
}

function remove(element) {
    let id = element.parentNode.parentNode.id;
    names.splice(id, 1);
    refresh();
}

function refresh() {
    displayNames.length = 0;

    console.log(names);

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    names.forEach(newOrder);
    document.getElementById("display-names").innerHTML = displayNames.join('');
}

function edit(element) {
    let id = element.parentNode.parentNode.id;
    document.getElementById('name-in').value = names[id];
    names.splice(id, 1);
    refresh();
}

function newOrder(value, index, array) {
    displayNames.push(pattern(value, index));
};

function generate(params) {
    if (names.length > 1) {
        let max = names.length - 1;
        let min = 0;
        let turn = 1;
        let stop;
        let int = null
        let ring = document.getElementById('ring');
        let index
    
        if (names.length > 10) {
            stop = 20;
        } else {
            stop = 10;
        };
    
        clearInterval(int);
    
        ring.style.animationPlayState = "running";
    
        int = setInterval(gener, 100);
    
        function gener(params) {
            if (turn == stop) {
                index = Math.floor(Math.random() * (max - min + 1) + min)
                document.getElementById('output').innerHTML = names[index];
    
                ring.style.animationPlayState = "paused";
                clearInterval(int)
            } else {
                turn++
                
                index = Math.floor(Math.random() * (max - min + 1) + min)
                document.getElementById('output').innerHTML = names[index];
            }
        }
    } else {
        document.getElementById('nameErrMes').innerHTML =
        `<p>add the name</p>`;
    }
}

