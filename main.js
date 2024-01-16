
    let contenitore = document.getElementById("board");
    for (let i = 1; i<= 81; i++){
        let boxItem = document.createElement("div");
        contenitore.append(boxItem)
        boxItem.classList.add("item");
        boxItem.textContent = i
    }