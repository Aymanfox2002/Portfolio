// start sidebar
let list = document.getElementById("list")
let sidebar = document.getElementsByClassName("sidebar")[0]
let close = document.getElementById("close")

list.onclick = function() {
    this.style.display = "none"
    sidebar.style.left = "0px"
}

close.onclick = function() {
    list.style.display = "block"
    sidebar.style.left = "-300px"
}

document.onkeyup = function(e){
    if(e.key === "Escape"){
    sidebar.style.left = "-300px"
    list.style.display = "block"
        }
}

// End sidebar