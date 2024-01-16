let settings = document.getElementById("difficulty");
let contenitore = document.getElementById("board");
function play(){
    contenitore.innerHTML = "";
    if (settings.value === "easy"){

        for (let i = 1; i<= 100; i++){
            let boxItem = document.createElement("div");
            contenitore.append(boxItem)
            boxItem.classList.add("item", "easy");
            boxItem.textContent = i
        }
    } else if (settings.value === "medium"){
        for (let i = 1; i<= 81; i++){
            let boxItem = document.createElement("div");
            contenitore.append(boxItem)
            boxItem.classList.add("item", "medium");
            boxItem.textContent = i
        }
    } else if (settings.value === "hard"){
        for (let i = 1; i<= 49; i++){
            let boxItem = document.createElement("div");
            contenitore.append(boxItem)
            boxItem.classList.add("item", "hard");
            boxItem.textContent = i
        }
}
}

