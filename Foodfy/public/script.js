const cards = document.querySelectorAll('.card')
const hideList = document.querySelectorAll("#action")

for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function(){
        window.location.href = `/recipe/${i}`
    })
}

for(let i = 0; i < hideList.length; i++) {
    hideList[i].addEventListener("click", function(){
        document.querySelector("#lista" + i).classList.toggle("hide")
        if(document.querySelector("#lista" + i).classList.contains("hide")){
            hideList[i].innerHTML = "mostrar"
        } else {
            hideList[i].innerHTML = "esconder"
        }
    })
}