// start sidebar
let list = document.getElementById("list")
let sidebar = document.getElementsByClassName("sidebar")[0]
let close = document.getElementById("close")

list.onclick = function() {
    this.style.display = "none"
    sidebar.style.display = "block"
}

close.onclick = function() {
    list.style.display = "block"
    sidebar.style.display = "none"
}

// End sidebar